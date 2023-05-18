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

export default ({ children }) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Header />
            {/* <div className={classes.toolbar} /> */}
            <div className={classes.root}>
                <Container maxWidth="lg">
                    {children}
                </Container>
            </div>
        </React.Fragment>

    )
};