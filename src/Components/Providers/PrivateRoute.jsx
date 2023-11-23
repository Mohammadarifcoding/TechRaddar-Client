import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = UseAuth()
    const lo = useLocation()
    if(loading){
        return <p>loaddinn....</p>
    }
    if(user){
        return children
    }


    return <Navigate to="/login" state={{from: lo}} replace></Navigate>
};

export default PrivateRoute;