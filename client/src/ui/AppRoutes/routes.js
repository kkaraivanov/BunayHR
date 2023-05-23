import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Loadable } from '../../components';
import AuthorizedRoutes from './AuthorizedRoutes';
import NotAuthorizedRoutes from './NotAuthorizedRoutes';

const Home = Loadable(lazy(() => import('../../pages/Home')));
const Service = Loadable(lazy(() => import('../../pages/Service')));
const Contact = Loadable(lazy(() => import('../../pages/Contact')));
const Login = Loadable(lazy(() => import('../../pages/Auth/Login')));

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

const Logout = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch({ type: 'SET_USER_LOGOUT' })
    },[dispatch])
    
    return (
        <Navigate replace to='/' />
    )
}

export const routes = {
    home: {
        type: "page",
        title: "Начало",
        path: "/",
        key: "home",
        protected: false,
        role: ''
    },
    service: {
        type: "page",
        title: "Услуги",
        path: "/service",
        key: "service",
        protected: false,
        role: ''
    },
    contact: {
        type: "page",
        title: "Контакти",
        path: "/contact",
        key: "contact",
        protected: false,
        role: ''
    },
    login: {
        type: "page",
        title: "Вход",
        path: "/login",
        key: "login",
        protected: false,
        role: ''
    },
    adminDashboard: {
        type: "page",
        title: "Dashboard",
        path: "/admin/dashboard",
        key: "admin/dashboard",
        protected: true,
        role: 'admin'
    },
    adminUsers: {
        type: "page",
        title: "Потребители",
        path: "/admin/users",
        key: "admin/users",
        protected: true,
        role: 'admin'
    },
    logout: {
        type: "page",
        title: "Изход",
        path: 'logout',
        key: "logout",
        protected: true,
        role: 'admin'
    }
}

export const publicRoutes = [
    {
        path: '/',
        element: <NotAuthorizedRoutes />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "service",
                element: <Service />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "logout",
                element: <Logout />,
            }
        ]
    }
]

export const privateRoutes = [
    {
        path: '/admin',
        element: <AuthorizedRoutes />,
        children: [
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "users",
                element: <Users />,
            }
        ]
    }
]