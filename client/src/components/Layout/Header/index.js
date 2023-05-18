import React from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import { makeStyles } from "@mui/styles";
import { 
    AppBar,
    Box, 
    Link, 
    List, 
    ListItem,  
    ListItemText, 
    Toolbar, 
    Typography 
} from "@mui/material";
import logo from '../../../assets/images/bunay-logo.png';

const useStyles = makeStyles((theme) => {
    return {
        logo: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 2),
        },
        logoContent: {
            textTransform: 'uppercase',
            fontSize: 34,
            fontWeight: 600,
            padding: theme.spacing(0, 2),
        },
        active: {
            color: '#F2DD42'
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
            <Toolbar>
                <Link href="/" className={classes.logo}>
                    <Box
                        component="img"
                        sx={{ height: 54 }}
                        alt="Logo"
                        src={logo}
                    />
                </Link>
                <Typography variant='body2' spacing={2} className={classes.logoContent}>
                    Bunay SA
                </Typography>
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