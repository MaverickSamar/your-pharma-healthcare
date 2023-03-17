import React, {useRef, useEffect} from 'react';
import './Header.css';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/Logo.png';
import {Container, Row} from 'reactstrap';
import userIcon from '../../assets/images/user-icon.png';
import {motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.config';

import useAuth from '../../custom-hooks/useAuth';
import { toast } from 'react-toastify';


const nav__links = [
  {
    path: 'home',
    display: 'Home'
  },
  {
    path: 'about',
    display: 'About'
  },
  {
    path: 'shop',
    display: 'Products'
  },
  // {
  //   path: 'login',
  //   display: 'Login'
  // },
]

const Header = () => {

  const headerRef = useRef(null);
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const profileActionsRef = useRef(null);

  const {currentUser} = useAuth();

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () =>{
      if(document.body.scrollTo > 80 || document.documentElement.scrollTop >80)
      {
        headerRef.current.classList.add("sticky__header");
      }
      else{
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  const logout = () => {
    signOut(auth).then(()=>{
      toast.success('Logged out successfully');
    }).catch(err => {
      toast.error(err.message);
    })
  }

  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const menuToggle = () => menuRef.current.classList.toggle('active__menu');

  const navigateToCart = () => {
    navigate('/cart');
  };
  // const debugging = () => {
  //   console.log(currentUser);
  // }
  const toggleProfileActions = () => {
    profileActionsRef.current.classList.toggle('show__profileActions');
  }
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>YourPharma</h1>
                
              </div>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
              {nav__links.map((item, index) => (<li className='nav__item' key={index}>
                <NavLink to={item.path} className={(navClass) => navClass.isActive ? "nav__active": ""}>
                  {item.display}
                </NavLink>
              </li>))} 
              </ul>
            </div>
            <div className="nav__icons">
            <span className="fav__icon">
              <i class="ri-heart-line"></i>
              <span className="badge">1</span>
              </span>
              <motion.span whileHover={{scale:1.2}} className="cart__icon" onClick={navigateToCart}>
              <i class="ri-shopping-bag-line"></i>
              <span className="badge">{totalQuantity}</span>
              </motion.span>

              <div className='profile'>
                <motion.img 
                  whileHover={{scale:1.2}} 
                  src={currentUser ? currentUser.photoURL : userIcon} 
                  alt="avatar" 
                  onClick={toggleProfileActions}
                />

                <div 
                  className="profile__actions" 
                  ref={profileActionsRef} 
                  onClick={toggleProfileActions}
                  >
                  {/* {
                    currentUser ? (
                      <span>Logout</span>
                      ):(
                    <div>
                      <Link to='/signup'>Signup</Link>
                      <Link to='/login'>Login</Link>
                    </div>
                  )} */}
                </div>
              </div>
              {
                currentUser? (
                  <div onClick={logout}>
                    <Link to='/home'><span>Logout</span></Link>
                  </div>
                ):(
                  <div>
                      <Link to='/login'><span>Login</span></Link>
                      
                    </div>
                )
              }

              <div className="mobile__menu">
              <span onClick={menuToggle}>
                <i class="ri-menu-line"></i>
              </span>
            </div>
            </div>          
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header