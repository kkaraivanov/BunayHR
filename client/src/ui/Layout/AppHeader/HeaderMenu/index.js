import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import {
    Box,
    useMediaQuery,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';
import { makeStyles } from "@mui/styles";
import { routeItems } from '../../../AppRoutes';

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

const HeaderContent = ({ isAuthorized }) => {
    const classes = useStyles();
    const [routes, setRoutes] = useState([])
    const navigate = useNavigate();
    const location = useLocation();
    const media = useMediaQuery((theme) => theme.breakpoints.down('lg'));

    useEffect(() => {
        setRoutes(routeItems.filter(r => r.protected === isAuthorized))
    }, [isAuthorized])

    return (
        <React.Fragment>
            {!media && <Box
                sx={{
                    width: '100%',
                    m: { xs: 0, lg: 2 },
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}
            >
                <List className={classes.root}>
                    {routes?.map((item) => (
                            <ListItem
                                button
                                key={item.key}
                                onClick={() => navigate(item.path)}
                                className={location.pathname == item.path ? classes.active : null}
                            >
                                <ListItemText primary={item.title} />
                            </ListItem>
                        )
                        )}
                </List>
            </Box>
            }
            {media && <Box sx={{ width: '100%', m: 1 }} />}
        </React.Fragment>
    )
};

const mapStateToProps = state => ({
    isAuthorized: state.app.isAuthorized,
    isDrawerOpen: state.app.isDrawerOpen
});

const mapDispatchToProps = dispatch => ({
    dawerIsOpen: () => dispatch({ type: 'SET_DRAWER_OPEN' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContent)