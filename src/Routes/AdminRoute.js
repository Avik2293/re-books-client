import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Components/Spinner';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hooks/useAdmin';

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const [isAdmin] = useAdmin(user?.email);

    const location = useLocation();

    if(loading){
        return <Spinner></Spinner>;
    }

   if(user && isAdmin){
       return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default AdminRoute;