import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Outlet, useLocation, useNavigate,  } from 'react-router-dom';

const NotAuthorizedRoutes = ({role}) => {
    const navigate = useNavigate();
    const location = useLocation();
    
    useEffect(() => {
        if(location.pathname === "/") {
            navigate(`/${role}`);
        }
    }, [role]);
    
    return (<>
        {<Outlet />}
    </>);
};

const mapStateToProps = state => ({
    role: state.app.role
});

export default connect(mapStateToProps)(NotAuthorizedRoutes)