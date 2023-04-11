import React from 'react'
import './footer.css';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo.png'
import {ListGroup, ListGroupItem} from 'reactstrap';


const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4'>
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1 className='text-white'>YourPharmaHealthcare</h1>
              </div>

            </div>
            <div className="footer__text-div">
              <p className="footer__text">
              Incorporated in 2021, we are one of the best domestic pharmaceutical companies which offer the best quality of medicines. we deal in various acute and chronic therapeutic areas, as well as Central customer healthcare products.
              </p>
            </div>
          </Col>


          <Col lg='3'>
          <div className="footer__quick-links">
            <h4 className='quick__links-title'>Top Categories</h4>
            <ListGroup className='quick__links-category'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2 bg-transparent'>
                <Link to='/shop'>Tablets</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2 bg-transparent'>
                <Link to='/shop'>Capsules</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2 bg-transparent'>
                <Link to='/shop'>Injections</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2 bg-transparent'>
                <Link to='/shop'>Syrups</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
            
          </Col>

          <Col lg='2'>
          <div className="footer__quick-links">
            <h4 className='quick__links-title'>Useful Links</h4>
            <ListGroup className='quick__links-category'>
              <ListGroupItem className='ps-0 border-0 bg-transparent'>
                <Link to='/home'>Home</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 bg-transparent'>
                <Link to='/shop'>Shop</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 bg-transparent'>
                <Link to='/about'>About</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 bg-transparent'>
                <Link to='/cart'>Cart</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 bg-transparent'>
                <Link to='/blog'>Blog</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 bg-transparent'>
                <Link to='/login'>Login</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 bg-transparent'>
                <Link to='/privacy-policy'>Privacy Policy</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
          </Col>


          <Col lg='3'>
          <div className="footer__quick-links">
            <h4 className='quick__links-title'>Contact</h4>
            <ListGroup className='footer__contact'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2 bg-transparent'>
                <span><i class="ri-map-pin-line"></i></span>

                <h6 className='text-white'>206, Biltigarh, Makkhanpur, Firozabad.</h6>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2 bg-transparent'>
              <span><i class="ri-phone-line"></i></span>

              <h6 className='text-white'>+91 8958209001</h6>
              <h6 className='text-white'>+91 8958729001</h6>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2 bg-transparent'>
              <span><i class="ri-mail-line"></i></span>
                <h6 className='text-white'>contact@yourpharmahealthcare.com</h6>
              </ListGroupItem>
              
            </ListGroup>
          </div>
          </Col>

          <Col lg='12'>
            <p className="footer__copyright">Copyright {year}. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer