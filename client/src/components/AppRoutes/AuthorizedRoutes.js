import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Outlet, useNavigate,  } from 'react-router-dom';

const AuthorizedRoutes = ({isAuthorized}) => {
    const navigate = useNavigate();

    useEffect(() => {
        if(!isAuthorized) navigate('/');
    }, [isAuthorized]);

    return (<>
        {<Outlet />}
    </>);
};

const mapStateToProps = state => ({
    isAuthorized: state.app.isAuthorized,
});

export default connect(mapStateToProps)(AuthorizedRoutes)