import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet';
import HeroImg from '../assets/images/hero.png';
import '../styles/home.css'
import { motion } from 'framer-motion';
const About = () => {
  return (
    <Helmet title={"About"}>
    
    <section className="hero__section">
      <Container>
        <Row>
          <Col ls='6' md='6'>
            <div className="hero__content">
              <p className="hero__subtitle">
              A certified pharma marketing company
              </p>
              <h2>Your Pharma Healthcare, Serving The Healthcare</h2>
              <p>From one man's vision in 2019 to India's one of leading Pharma marketing units,  your Pharma Healthcare, is a certified Pharma marketing company with a rich heritage to follow established in 2020 by Harsh Thakur & Sahiba.Your pharma has evolved state-of-the-art with affordable and quality formulated medicine. We have modular Laboratories and highly experienced Technical staff,  resulting in 50% growth yearly. </p>
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
    {/* <Services/> */}

    {/* <section className="trending__products">
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
    </section> */}


  
  </Helmet>
  )
}

export default About