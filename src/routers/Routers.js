import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import ProductDetails from '../pages/ProductDetails';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import About from '../pages/About';
import ProtectedRoutes from './ProtectedRoutes';
import AddProducts from '../admin/AddProducts';
import AllProducts from '../admin/AllProducts';
import Dashboard from '../admin/Dashboard';
import Users from '../admin/Users';
import Orders from '../admin/Orders'
const Routers = () => {
  return (
  <Routes>
        <Route path='/' element={<Navigate to="home"/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='shop/:id' element={<ProductDetails/>}/>
        <Route path='cart' element={<Cart/>}/>

        <Route path='/*' element={<ProtectedRoutes/>}>
          <Route path='checkout' element={<Checkout/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='dashboard/all-products' element={<AllProducts/>}/>
          <Route path='dashboard/add-products' element={<AddProducts/>}/>
          <Route path='dashboard/users' element={<Users/>}/>
          <Route path='dashboard/orders' element={<Orders/>}/>
        </Route>

        
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='about' element={<About/>}/>
  </Routes>
  )
}

export default Routers;