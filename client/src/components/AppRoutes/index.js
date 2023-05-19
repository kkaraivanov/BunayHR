import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

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


const mapStateToProps = state => ({
    isAuthorized: state.app.isAuthorized
});

export default connect(mapStateToProps)(({ isAuthorized }) => {
    const items = routes.filter(r => r.protected === isAuthorized).map((x) => x.items)

    return (
        <Layout items={items}>
            <Routes>
                {getRoutes(routes)}
            </Routes>
        </Layout>
    )
});