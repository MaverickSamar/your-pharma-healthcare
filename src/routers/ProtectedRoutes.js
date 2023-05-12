import React from 'react';
import useAdminAuth from '../custom-hooks/useAdminAuth';
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


const ProtectedRoutes = () => {
  
    const { currentUser } = useAdminAuth();
    return currentUser ? <Outlet/> : <Navigate to='/'/>;
}

export default ProtectedRoutes