import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

const AuthorizedRoutes = ({isAuthorized, role}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const split =location.pathname.split(`${role}`)[1].length == 0;

    useEffect(() => {
        if(!isAuthorized) navigate('/');
        if(split) navigate(`${location.pathname}/dashboard`);
    }, [isAuthorized]);
    
    return (<>
        {<Outlet />}
    </>);
};

const mapStateToProps = state => ({
    isAuthorized: state.app.isAuthorized,
    role: state.app.role
});

export default connect(mapStateToProps)(AuthorizedRoutes)