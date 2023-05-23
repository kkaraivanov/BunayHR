import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';

import AppHeader from "./AppHeader";
import AppDrawer from "./AppDrawer";

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(2, 6),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            padding: theme.spacing(2, 1),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: `${theme.options.drawer.w}px`,
        }),
        [theme.breakpoints.down('lg')]: {
            padding: theme.spacing(2, 4)
        }
    }),
);

const Layout = ({
    // component props
    children,
    // redux actions
    dawerIsOpen,
    login,
    logout,
    // redux props
    isAuthorized,
    isDrawerOpen
}) => {
    const navigate = useNavigate();
    //const routeItems = routes.filter(r => r.protected === isAuthorized).map((x) => x.items)

    function handleDrawerOpen() {
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
            <AppHeader
                isAuthorized={isAuthorized}
                open={isDrawerOpen}
                handleDrawerOpen={handleDrawerOpen}
                handleLogin={handleLogin}
                handleLogout={handleLogout}
            />
            <AppDrawer open={isDrawerOpen} handleDrawerOpen={handleDrawerOpen} />
            <Main open={isDrawerOpen}>
                {children}
            </Main>
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