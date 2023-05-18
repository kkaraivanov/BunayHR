import React from "react";
import { makeStyles } from "@mui/styles";
import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";
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
        }
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
            </Toolbar>
        </AppBar>
    )
}