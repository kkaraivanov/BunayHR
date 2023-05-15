import React from 'react';

// material icons
import HomeIcon from '@mui/icons-material/Home';

const Home = () => {
    return(
        <h1>Welcome from Home</h1>
    )
}

const Dashboard = () => {
    return(
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