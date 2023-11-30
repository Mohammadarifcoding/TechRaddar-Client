import React from 'react';
import UseCheckAdmin from '../Hooks/UseCheckAdmin';
import UseAuth from '../Hooks/UseAuth';
import { Navigate } from 'react-router-dom';
import UseCheckModerator from '../Hooks/UseCheckModerator';

const ModeratorRoute = ({children}) => {
    const {user,loading} = UseAuth()
    const [adminCheck,ff,isloadingAdmin] = UseCheckAdmin()
    const [moderatorCheck,fff,isloadingModerator] = UseCheckModerator()
    if(loading || (isloadingAdmin ||  isloadingModerator)){
        return <p>loading...</p>
    }
   
        if(user && (moderatorCheck || adminCheck) ){
            return children
       }
    
   
   return <Navigate to={'/'}></Navigate>
};

export default ModeratorRoute;