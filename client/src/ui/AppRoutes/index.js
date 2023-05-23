import { useRoutes } from 'react-router-dom';

import Layout from '../Layout';
import { publicRoutes, privateRoutes, routes } from './routes';

export const routeItems = Object.values(routes);

export default (() => {
    return (
        <Layout>
            {useRoutes([...publicRoutes, ...privateRoutes])}
        </Layout>
    )
});