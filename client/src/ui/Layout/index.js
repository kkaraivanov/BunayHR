import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "./Header";
import Drawer from "./Drawer";

const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex',
        },
        toolbar: theme.mixins.toolbar
    }
})

const Layout = ({ 
    // component props
    children, 
    routes,
    // redux actions
    dawerIsOpen,
    login,
    logout,
    // redux props
    isAuthorized,
    isDrawerOpen 
}) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const routeItems = routes.filter(r => r.protected === isAuthorized).map((x) => x.items)

    function handleDawerOpen (){
        dawerIsOpen();
    };

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
        <React.Fragment>
            <Header
                isAuthorized={isAuthorized}
                routeItems={routeItems}
                open={isDrawerOpen}
                handleDawerOpen={handleDawerOpen}
                handleLogin={handleLogin}
                handleLogout={handleLogout}
            />
            <Drawer open={isDrawerOpen} handleDawerOpen={handleDawerOpen} />
            <div className={classes.root}>
                {children}
            </div>
        </React.Fragment>

    )
};

const mapStateToProps = state => ({
    isAuthorized: state.app.isAuthorized,
    isDrawerOpen: state.app.isDrawerOpen
});

const mapDispatchToProps = dispatch => ({
    dawerIsOpen: () => dispatch({ type: 'SET_DRAWER_OPEN' }),
    logout: () => dispatch({ type: 'SET_USER_LOGOUT' }),
    login: (role) => dispatch({ type: 'SET_USER_LOGEDIN', payload: role }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);