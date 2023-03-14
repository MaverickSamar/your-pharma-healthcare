import React from 'react'
import './footer.css';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/eco-logo.png';
import {ListGroup, ListGroupItem} from 'reactstrap';


const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4'>
            <div className="logo">
              {/* <img src={logo} alt="logo" /> */}
              <div>
                <h1 className='text-white'>YourPharma</h1>
              </div>

            </div>
              <p className="footer__text mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet fuga culpa rem, vel modi quisquam totam aspernatur a reiciendis. Ipsam exercitationem perspiciatis eum soluta pariatur eveniet suscipit maiores. Eveniet, maiores?
              </p>
          </Col>


          <Col lg='3'>
          <div className="footer__quick-links">
            <h4 className='quick__links-title'>Top Categories</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2 bg-transparent'>
                <Link to='#'>Tablets</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2 bg-transparent'>
                <Link to='#'>Pills</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2 bg-transparent'>
                <Link to='#'>Syringes</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2 bg-transparent'>
                <Link to='#'>Syrups</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
            
          </Col>

          <Col lg='2'>
          <div className="footer__quick-links">
            <h4 className='quick__links-title'>Useful Links</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0 bg-transparent'>
                <Link to='#'>Home</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 bg-transparent'>
                <Link to='#'>Shop</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 bg-transparent'>
                <Link to='#'>About</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 bg-transparent'>
                <Link to='#'>Cart</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 bg-transparent'>
                <Link to='#'>Login</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 bg-transparent'>
                <Link to='#'>Privacy Policy</Link>
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

                <p>123, New Delhi</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2 bg-transparent'>
              <span><i class="ri-phone-line"></i></span>

              <p>+91 7078241377</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2 bg-transparent'>
              <span><i class="ri-mail-line"></i></span>

<p>yourpharmahealthcare@gmail.com</p>
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