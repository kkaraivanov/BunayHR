import React from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import { makeStyles } from "@mui/styles";
import {
    AppBar,
    List,
    ListItem,
    ListItemText,
    Toolbar,
} from "@mui/material";

import { CompanyLogo } from "./CompanyLogo";

const useStyles = makeStyles((theme) => {
    return {
        active: {
            color: theme.palette.secondary.main
        },
        root: {
            display: 'flex',
            padding: 0
        }
    }
});

export default ({ items }) => {
    const classes = useStyles();
    const history = useNavigate();
    const location = useLocation();

    return (
        <AppBar
            position="sticky"
            elevation={0}
        >
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <CompanyLogo />
                
                <List className={classes.root}>
                    {items.map((item) => (
                        <ListItem
                            button
                            key={item.title}
                            onClick={() => history(item.path)}
                            className={location.pathname == item.path ? classes.active : null}
                        >
                            <ListItemText primary={item.title} />
                        </ListItem>
                    ))}
                </List>
            </Toolbar>
        </AppBar>
    )
}