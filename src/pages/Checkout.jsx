import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Form, FormGroup} from "reactstrap";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import '../styles/checkout.css';
import {useSelector} from "react-redux";
import { toast } from "react-toastify";
import { db, storage } from "../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";


const Checkout = () => {

  const [enterTitle, setEnterTitle] = useState("");
  const [enterShortDesc, setEnterShortDesc] = useState("");
  const [enterDesc, setEnterDesc] = useState("");
  const [enterCategory, setEnterCategory] = useState("");
  const [enterPrice, setEnterPrice] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const addProduct = async (e) => {
    e.preventDefault();

    // ====== add to firebase
    try {
      const docRef = await collection(db, "orders");
      // const storageRef = ref(
      //   storage,
      //   `productImages/${Date.now() + file.name}`
      // );
      // const uploadTask = uploadBytesResumable(storageRef, file);

      // uploadTask.on(
      //   () => {
      //     toast.error("Images not uploaded");
      //   },
      //   () => {
      //     getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await addDoc(docRef, {
              productName: enterTitle,
              shortDesc: enterShortDesc,
              description: enterDesc,
              price: enterPrice,
              category: enterCategory,
            }
            );
          // });
      //   }
      // );
      setLoading(false);
      toast.success("Product successfully added!");
      navigate("/dashboard/all-products");
    } catch (e) {
      setLoading(false);
      toast.error("product not added!");
      console.log(e);
    }
    // console.log(product);
  };



  const totalQty = useSelector(state=> state.cart.totalQuantity);
  const totalAmount = useSelector(state=> state.cart.totalAmount);

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

                <button className="in__btn w-100">
                  Go back to cart
                </button>
            
            </Col>

          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout