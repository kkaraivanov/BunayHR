import React from "react";
import { AppBar, Toolbar, useMediaQuery } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";

import HeaderMenu from "./HeaderMenu";
import Toggler from "./Toggler";

const AuthorizedAppBar = styled(
    AppBar,
    { shouldForwardProp: (prop) => prop !== 'open' })
    (({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        ...(open && {
            background: theme.palette.background.paper,
            marginLeft: theme.options.drawer.w,
            mr: 0,
            width: `calc(100% - ${theme.options.drawer.w}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            })
        })
    }));

export default ({ open }) => {
    const theme = useTheme();
    const media = useMediaQuery(theme.breakpoints.down('lg'));

    const appBarProps = {
        position: "sticky",
        elevation: 0
    }

    const mainHeader = (
        <Toolbar
            sx={{
                ...(open && ({
                    [theme.breakpoints.up('lg')]: {
                        width: '100%',
                        ml: 0,
                        borderRadius: 0
                    }
                }))
            }}
        >
            <Toggler />
            <HeaderMenu />
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