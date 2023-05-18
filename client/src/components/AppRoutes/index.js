import { Routes, Route, Navigate } from 'react-router-dom';
import routes from './routes';

import AuthorizedRoutes from './AuthorizedRoutes';
import Layout from '../Layout';

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
        }

        return <Route path={path} element={component} key={route.key} />;
    });

export default () => {
    const items = routes.map((x) => x.items)
    
    return (
        <Layout items={items}>
            <Routes>
                {getRoutes(routes)}
            </Routes>
        </Layout>
    )
};