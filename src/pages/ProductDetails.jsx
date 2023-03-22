import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/product-details.css";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { cartActions } from "../redux/slices/cartSlice";
import ProductList from "../components/UI/ProductList";
import {doc, getDoc} from 'firebase/firestore';
import { db } from "../firebase.config";
import useGetData from "../custom-hooks/useGetData";

const ProductDetails = () => {

  const [product, setProduct] = useState([]);
  const { id } = useParams();
  // const product = products.find((item) => item.id === id);
  const {data: products} = useGetData('products');
  const docRef = doc(db, 'products', id);

  useEffect(() => {
    const getProduct = async() => {
      const docSnap = await getDoc(docRef);

      if(docSnap.exists()){
        setProduct(docSnap.data())
      }
      else{
        console.log('No Products!');
      }
    }
    getProduct()
  }, [])

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category
  } = product;


  const dispatch = useDispatch();
  const [tab, setTab] = useState("desc");
  const [rating, setRating] = useState(null);

  const reviewUser = useRef('');
  const reviewMsg = useRef('');

  const relatedProducts = products.filter(item => item.category === category);

  const submitHandle = (e) => {
    e.preventDefault()

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };

    console.log(reviewObj);
    toast.success("Review submitted.")
  }


  const addToCart = () => {
    dispatch(cartActions.addItem({
      id,
      productName,
      price,
      image: imgUrl,
    })
    );
    toast.success("Product added successfully.");
  }

  useEffect(()=> {
    window.scrollTo(0,0);
  }, [product])

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />

      <section className="pt-0 mt-4">
        <Container>
          <Row>
            <Col lg="6" className="product__img">
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg="6" className="mt-4">
              <h2>{productName}</h2>
              <div className="product__rating mb-3">
                <div>
                  <span>
                    <i class="ri-star-s-fill"></i>
                  </span>
                  <span>
                    <i class="ri-star-s-fill"></i>
                  </span>
                  <span>
                    <i class="ri-star-s-fill"></i>
                  </span>
                  <span>
                    <i class="ri-star-s-fill"></i>
                  </span>
                  <span>
                    <i class="ri-star-half-s-line"></i>
                  </span>

                  <p>
                    (<span>{avgRating}</span> ratings)
                  </p>
                </div>

                <div className="d-flex align-items-center gap-5">
                <span className="product__price">₹{price}</span>
                <span>Category: {category}</span>
                </div>

                <p className="mt-3">{shortDesc}</p>

                <motion.button className="in__btn" whileHover={{ scale: 1.2 }} onClick={addToCart}>
                  Add to Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6
                  className={`${tab === "desc" ? "active__tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "active__tab" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="tab__content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product__review mt-5">
                  <div className="review__wrapper">
                    <ul>
                      {
                        reviews?.map((item, index) => (
                          <li key={index}>
                            <h6>Harsh Thakur</h6>
                            <span>{item.rating} (rating)</span>
                            <p>{item.text}</p>
                          </li>
                        ))
                      }
                    </ul>

                    <div className="review__form d-flex align-items-center gap-5 rating__group">
                      <h4>Leave your review</h4>
                      <form action="" onSubmit={submitHandle}>
                        <div className="form__group ">
                          <input type="text" placeholder="Enter name" ref={reviewUser} required/>
                        </div>
                        <div className="form__group d-flex align-items-center gap-4">
                          <motion.span whileHover={{scale:1.2}} onClick={() => setRating(1)}>1 <i class="ri-star-s-fill"></i></motion.span>
                          <motion.span whileHover={{scale:1.2}} onClick={() => setRating(2)}>2 <i class="ri-star-s-fill"></i></motion.span>
                          <motion.span whileHover={{scale:1.2}} onClick={() => setRating(3)}>3 <i class="ri-star-s-fill"></i></motion.span>
                          <motion.span whileHover={{scale:1.2}} onClick={() => setRating(4)}>4 <i class="ri-star-s-fill"></i></motion.span>
                          <motion.span whileHover={{scale:1.2}} onClick={() => setRating(5)}>5 <i class="ri-star-s-fill"></i></motion.span>
                        </div>

                        <div className="form__group">
                          <textarea rows={4} type="text" placeholder="Review Message..." ref={reviewMsg} required/>
                        </div>
                        
                        <motion.button whileHover={{scale:1.2}} type="submit" className="in__btn">Submit</motion.button>

                      </form>
                    </div>
                  </div>
                  <p>{reviews.text}</p>
                </div>
              )}
            </Col>

            <Col lg='12' className="mt-5">
              <h2 className="related__title">See other products</h2>
            </Col>

            <ProductList data = {relatedProducts}/>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
