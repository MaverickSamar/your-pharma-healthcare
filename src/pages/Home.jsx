import React, {useState, useEffect} from 'react'
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import HeroImg from '../assets/images/hero.png'
import '../styles/home.css'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import Services from '../services/Services';
import products from '../assets/data/products'
import ProductList from '../components/UI/ProductList';
import counterImg from '../assets/images/counter.png';
import Clock from '../components/UI/Clock';


const Home = () => {

  const [popularProducts, setPopularProducts] = useState([]);

  const [newArrivals, setNewArrivals] = useState([])
  const [newArrivalsT, setNewArrivalsT] = useState([])


  useEffect(() => {
    const filteredProducts = products.filter((item) => item.category === "Tablet");

    const filteredNewArrivals = products.filter((item) => item.category === 'Tablet')

    const filteredNewArrivalsT = products.filter((item) => item.category === 'mobile')

    setPopularProducts(filteredProducts);

    setNewArrivals(filteredNewArrivals);
    setNewArrivalsT(filteredNewArrivalsT);
  }, []);


  return <Helmet title={"Home"}>
    
    <section className="hero__section">
      <Container>
        <Row>
          <Col ls='6' md='6'>
            <div className="hero__content">
              <p className="hero__subtitle">
                Your One Stop Pharmacy
              </p>
              <h2>Your Pharma Healthcare, Serving The Healthcare</h2>
              <p>Incorporated in 2021, we are one of the best domestic pharmaceutical companies which offer the best quality of medicines. we deal in various acute and chronic therapeutic areas, as well as Central customer healthcare products.</p>

              <motion.button whileHover={{scale:1.1}} className="in__btn"><Link to='/shop'>Shop Now</Link></motion.button>
              
              </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="hero__img">
              <motion.img whileHover={{scale:1.1}} src={HeroImg} alt="hero" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Services/>

    <section className="trending__products">
      <Container>
        <Row>
          <Col lg='12'className='text-center'>
            <h2 className="section__title">
              Popular Products
            </h2>
          </Col>
          <br />
          <br />
          <ProductList data={popularProducts}/>
        </Row>
      </Container>
    </section>

    <section className="timer__count">
      <Container>
        <Row>
          <Col lg='6' md='12'>
            <div className="clock__top-content">
              <h4 className='text-white fs-6 mb-2'>Limited Time Sale</h4>
              <h3 className='text-white fs-5 mb-3'>Best Prices</h3>
            </div>
            <Clock/>
            <motion.button whileHover={{scale:1.1}} className="buy__btn store__btn">
              <Link to='/shop'>Shop Now</Link>
            </motion.button>
          </Col>
          <Col lg='6' md='12' className='text-end counter__img'>
            <motion.img whileHover={{scale:1.2}} src={counterImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>

    <section className="new__arrivals">
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
          <h2 className="section__title">New Arrivals</h2>
          </Col>
          <br />
          <br />
          <ProductList data={newArrivals}/>
          <ProductList data={newArrivalsT}/>
        </Row>
      </Container>
    </section>


  
  </Helmet>
}

export default Home