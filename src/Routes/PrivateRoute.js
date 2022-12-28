import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Components/Loader';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='h-screen flex justify-center items-center'><Loader></Loader></div>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;