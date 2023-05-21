import { Routes, Route, Navigate } from 'react-router-dom';

import AuthorizedRoutes from './AuthorizedRoutes';
import NotAuthorizedRoutes from './NotAuthorizedRoutes';
import Layout from '../Layout';
import routes from './routes';

const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
        const { items, component } = route;
        const { path } = items;

        if (route.protected) {
            return (
                <Route key={route.key} element={<AuthorizedRoutes />}>
                    <Route path={path} element={component} />
                </Route>
            );
        } else {
            return (
                <Route key={route.key} element={<NotAuthorizedRoutes />}>
                    <Route path={path} element={component} key={route.key} />
                </Route>
            )
        }
    });
    

export default (() => {
    return (
        <Layout routes={routes}>
            <Routes>
                {getRoutes(routes)}
            </Routes>
        </Layout>
    )
});