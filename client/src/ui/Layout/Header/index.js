import React from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import { makeStyles } from "@mui/styles";
import {
    AppBar,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    useMediaQuery,
} from "@mui/material";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';
import { useTheme, styled } from "@mui/material/styles";

import { CompanyLogo } from "../CompanyLogo";

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

// should get from config file
const drawerWidth = 260;
const AuthorizedAppBar = styled(AppBar, { forwordProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
        marginLeft: drawerWidth,
        mr: 0,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    })
}));

export default ({ 
    // component props
    routeItems, 
    // redux action
    handleDawerOpen,
    handleLogin, 
    handleLogout,
    // redux props
    isAuthorized,
    open,
}) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();
    const theme = useTheme();
    const media = useMediaQuery(theme.breakpoints.down('lg'));

    const appBarProps = {
        position: "sticky",
        elevation: 0
    }

    const mainHeader = (
        <Toolbar
            sx= {{
                ...(open && ({
                    [theme.breakpoints.up('lg')]: {
                        width: '100%',
                        ml: 0,
                        borderRadius: 0
                    }
                }))
            }}
        >
            {isAuthorized ? (
                <IconButton
                    disableRipple
                    aria-label="open drawer"
                    onClick={handleDawerOpen}
                    sx={{
                        color: 'companyTitle.main',
                        bgcolor: 'transparent',
                        ml: { xs: 0, lg: -2 }
                    }}
                >
                    {!open
                        ? <MenuUnfoldOutlined />
                        : <MenuFoldOutlined />
                    }
                </IconButton>
            ) : <CompanyLogo />}

            {/* HeaderContent component */}
            <List className={classes.root}>
                {routeItems.map((item) => (
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
    );

    return (
        <React.Fragment>
            {!media ? (
                <AuthorizedAppBar open={open} {...appBarProps}>
                    {mainHeader}
                </AuthorizedAppBar>
            ) : (
                <AppBar {...appBarProps}>
                    {mainHeader}
                </AppBar>
            )}
        </React.Fragment>

    )
}