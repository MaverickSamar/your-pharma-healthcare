import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import useAuth from '../custom-hooks/useAuth';
import userIcon from '../assets/images/user-icon.png';
import '../styles/admin-nav.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';


const admin__nav = [
  {
    display: 'Dashboard',
    path: 'admin/dashboard'
  },
  {
    display: 'All Products',
    path: 'admin/dashboard/all-products'
  },
  {
    display: 'Orders',
    path: 'admin/dashboard/orders'
  },
  {
    display: 'Users',
    path: 'admin/dashboard/users'
  },
  {
    display: 'Add Products',
    path: 'admin/dashboard/add-products'
  },
  {
    display: 'Add Blog',
    path: 'admin/dashboard/add-blog'
  },
]


const AdminNav = () => {

  const {currentUser} = useAuth();

  return (
    <>
    <header className='admin__header'>
      <div className="admin__nav-top">
        <Container>
          <div className="admin__nav-wrapper-top">
            <Link to='/'>
              <div className="logo">
                <h2>Your Pharma Healthcare</h2>
              </div>
            </Link>  

            <div className="search__box">
              <input type="text" placeholder='Search...'/>
              <span>
                  <i class="ri-search-line"></i>
              </span>
            </div>

            <div className="admin__nav-top-right">
              <span>
                <i class="ri-notification-2-line"></i>
              </span>

              <span>
                <i class="ri-settings-5-line"></i>
              </span>

              <img src={userIcon} alt="" />
              <span className='nav__name'>{currentUser.displayName}</span>
            </div>
          </div>
        </Container>
      </div>
    </header>


    <section className='admin__menu p-0'>
      <Container> 
        <Row>
          <div className="admin__navigation">
            <ul className="admin__menu-list">
              {
                admin__nav.map((item, index) => (
                  <li className="admin__menu-item" key={index}>
                    <NavLink to={item.path} className={navClass => navClass.isActive? "active__admin-menu" : ""}>{item.display}</NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default AdminNav