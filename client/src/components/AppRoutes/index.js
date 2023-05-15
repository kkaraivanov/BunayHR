import { Routes, Route, Navigate } from 'react-router-dom';
import routes from './routes';

const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
        const { items } = route;
        const { path } = items;

        return <Route path={path} element={route.component} key={route.key} />;
    });

export default () => {
    return (
        <Routes>
            {getRoutes(routes)}
        </Routes>
    )
};