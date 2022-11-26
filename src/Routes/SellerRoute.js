import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Components/Spinner';
import { AuthContext } from '../Context/AuthProvider';
import useSeller from '../Hooks/useSeller';

const SellerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const [isSeller] = useSeller(user?.email);

    const location = useLocation();

    if(loading){
        return <Spinner></Spinner>;
    }

   if(user && isSeller){
       return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default SellerRoute;