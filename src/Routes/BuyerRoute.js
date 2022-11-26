import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Components/Spinner';
import { AuthContext } from '../Context/AuthProvider';
import useBuyer from '../Hooks/useBuyer';


const BuyerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const [isBuyer, isBuyerLoading] = useBuyer(user?.email);

    const location = useLocation();
    // console.log(isAdmin);

    if(loading || isBuyerLoading){
        return <Spinner></Spinner>;
    }

   if(user && isBuyer){
       return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default BuyerRoute;