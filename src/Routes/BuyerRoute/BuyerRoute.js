import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useBuyer from '../../hooks/useBuyer';
import Loading from '../../Shared/Loading/Loading';



const SellerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isBuyer, isAdminLoading] = useBuyer(user?.email);
    
    const location  = useLocation();

    if(loading || isAdminLoading){
                return <Loading />
            }

    if(user && isBuyer){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default SellerRoute;