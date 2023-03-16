import React from 'react';
import {Container, Row, Col, Form, FormGroup} from "reactstrap";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import '../styles/checkout.css';
import {useSelector} from "react-redux";


const Checkout = () => {


  const totalQty = useSelector(state=> state.cart.totalQuantity)
  const totalAmount = useSelector(state=> state.cart.totalAmount)
  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout"/>
      <section> 
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className="fw-bold mb-4">
                Billing Information
              </h6>

              <Form className='billing__form'>
                <FormGroup className="form__group">
                  <input type="text" placeholder='Enter your name' required/>
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="email" placeholder='Enter your email' required/>
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="number" placeholder='Phone number' required/>
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder='Address' required/>
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder='City' required/>
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder='City' required/>
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="number" placeholder='Pincode' required/>
                </FormGroup>
              </Form>
            </Col>

            <Col lg='4'>
              <div className="checkout__cart">
                <h6>Total Qty: <span>₹{totalQty}</span></h6>
                <h6>Subtotal: <span>₹{totalAmount}</span></h6>
                <h6><span>
                  Shipping: <br/>
                  free shipping
                  </span>
                  <span>₹0</span>
                </h6>
                <h4>Total Cost: <span>₹{totalAmount}</span></h4>
                <button className="buy__btn auth__btn w-100">
                  Place Order
                </button>
              </div>

                <button className="in__btn auth__btn w-100">
                  Go to Cart
                </button>
            
            </Col>

          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout