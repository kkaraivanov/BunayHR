import React from 'react';

// material icons
import HomeIcon from '@mui/icons-material/Home';
import { Box, Typography } from '@mui/material';

const Home = () => {
    return (
        <>
            <Typography>
                Welcome from Home page
            </Typography>
            <Box sx={{ my: 2 }}>
                {[...new Array(12)]
                    .map(
                        () => `Cras mattis consectetur purus sit amet fermentum.
    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
    Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                    )
                    .join('\n')}
            </Box>
        </>
    )
}

const Dashboard = () => {
    return (
        <h1>Welcome from Dashboard</h1>
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
            title: "Dashboard",
            path: "/dashboard",
            icon: <HomeIcon size="12px" />,
        },
        key: "dashboard",
        component: <Dashboard />, // example for page component Dashboard
        protected: true,
        role: ''
    }
]