import React from 'react';

// material icons
import HomeIcon from '@mui/icons-material/Home';
import { Box, Typography } from '@mui/material';

const Home = () => {
    return (
        <>
            <Box sx={{ my: 2 }}>
                <Typography>
                    Welcome from Home page
                </Typography>
                <Typography variant="body1">
                    {[...new Array(20)]
                        .map(
                            () =>
                                `Cras mattis consectetur purus sit amet fermentum.
    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
    Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                        )
                        .join('\n')}
                </Typography>
            </Box>
        </>
    )
};

const Service = () => {
    return (
        <>
            <Box sx={{ my: 2 }}>
                <Typography>
                    Welcome from Service page
                </Typography>
                <Typography variant="body1">
                    {[...new Array(20)]
                        .map(
                            () =>
                                `Cras mattis consectetur purus sit amet fermentum.
    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
    Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                        )
                        .join('\n')}
                </Typography>
            </Box>
        </>
    )
}

const Dashboard = () => {
    return (
        <h1>Welcome from Dashboard</h1>
    )
}

const Users = () => {
    return (
        <h1>Welcome from Users</h1>
    )
}

export default [
    {
        type: "page",
        items: {
            title: "Начало",
            path: "/",
            icon: <HomeIcon size="12px" />,
        },
        key: "home",
        component: <Home />, // example for page component Home
        protected: false,
        role: ''
    },
    {
        type: "page",
        items: {
            title: "Услуги",
            path: "/service",
            icon: <HomeIcon size="12px" />,
        },
        key: "services",
        component: <Service />, // example for page component Service
        protected: false,
        role: ''
    },
    {
        type: "page",
        items: {
            title: "Dashboard",
            path: "/admin",
            icon: <HomeIcon size="12px" />,
        },
        key: "dashboard",
        component: <Dashboard />, // example for page component Dashboard
        protected: true,
        role: 'admin'
    },
    {
        type: "page",
        items: {
            title: "Потребители",
            path: "/admin/users",
            icon: <HomeIcon size="12px" />,
        },
        key: "users",
        component: <Users />, // example for page component Users
        protected: true,
        role: 'admin'
    }
]