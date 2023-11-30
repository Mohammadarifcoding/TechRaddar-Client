
import { Navigate } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';
import UseCheckAdmin from '../Hooks/UseCheckAdmin';
import UseCheckModerator from '../Hooks/UseCheckModerator';

const AdminRoute = ({children}) => {
    const {user,loading} = UseAuth()
    const [adminCheck,ff,isloadingAdmin] = UseCheckAdmin()
    if(isloadingAdmin ||  loading){
        return <p>loading...</p>
    }
    if(user && adminCheck ){
         return children
    }
   return <Navigate to={'/'}></Navigate>
};

export default AdminRoute;