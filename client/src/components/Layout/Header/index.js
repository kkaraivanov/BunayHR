import React from "react";
import { connect } from "react-redux";
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

const mapStateToProps = state => ({
    isAuthorized: state.app.isAuthorized
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch({type: 'SET_USER_LOGOUT'}),
    login: (role) => dispatch({type: 'SET_USER_LOGEDIN', payload: role}),
});

export default connect(mapStateToProps, mapDispatchToProps)(({ items, isAuthorized, logout, login }) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();

    function handleLogout() {
        logout();
        navigate('/');
    }

    function handleLogin() {
        const role = 'admin'
        login(role);
        navigate(`/${role}`);
    }

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
                            onClick={() => navigate(item.path)}
                            className={location.pathname == item.path ? classes.active : null}
                        >
                            <ListItemText primary={item.title} />
                        </ListItem>
                    ))}
                    {!isAuthorized ? (
                        <ListItem
                            button
                            onClick={handleLogin}
                        >Вход</ListItem>
                    ) : (
                        <ListItem
                            button
                            onClick={handleLogout}
                        >Изход</ListItem>
                    )}
                </List>
            </Toolbar>
        </AppBar>
    )
})