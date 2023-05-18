import React from "react";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "./Header";

const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex',
        },
        toolbar: theme.mixins.toolbar
    }
})

export default ({ children, items }) => {
    const classes = useStyles();
    
    return (
        <React.Fragment>
            <Header items={items} />
            <div className={classes.root}>
                {children}
            </div>
        </React.Fragment>

    )
};