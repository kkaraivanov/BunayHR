import React from "react";
import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar } from "@mui/material";

const useStyles = makeStyles((theme) => {
    return {
        
    }
});

export default () => {
    const classes = useStyles();

    return (
        <AppBar
            position="sticky"
            elevation={0}
        >
            <Toolbar>
                test
            </Toolbar>
        </AppBar>
    )
}