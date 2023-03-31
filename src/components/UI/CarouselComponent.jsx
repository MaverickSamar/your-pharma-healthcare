import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      arrows: true,
      autoplaySpeed: 3000,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className="carousel-container mt-6">
        <Slider {...settings}>
          <div>
            <Container>
              <Row>
                <Col lg="12" className="text-center">
                  <h2 className="section__title">Quality Products</h2>
                </Col>
                <br />
                <br />
                <Col lg="6" md="6">
                  <div className="about__img">
                    <motion.img
                      src="https://static.javatpoint.com/tutorial/quality-assurance/images/quality-assurance1.jpg"
                      alt=""
                    />
                  </div>
                </Col>
                <Col lg="6" md="6">
                  <div className="about__desc fw-bold">
                    <p>
                      We provide the best quality with the best available in the
                      concerned location. We consider our quality is the main
                      factor for our growth and brand values. Quality is the
                      major factor to differentiate us in the medicine business
                      from others. We always considered a long-term relationship
                      with our customers.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div>
          <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">COA Reports</h2>
            </Col>
            <br />
            <br />
            <Col lg="6" md="6">
              <div className="about__img">
                <motion.img
                  src="https://img.freepik.com/free-vector/top-service-badge_1284-5019.jpg?w=740&t=st=1675619532~exp=1675620132~hmac=f68852f8fa9330bb1a6c85a3840c2c7f5bc5482f14e2949bcb7e091349469cab"
                  alt=""
                />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="about__desc fw-bold">
                <p>
                  We never market any product without lab testing the product
                  whether the product contains the listed quantity of a drug or
                  not. if the report is not reported with the listed quantity of
                  API then, we tend to reject the whole batch.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
          </div>
          <div>
          <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Better Prices</h2>
            </Col>
            <br />
            <br />
            <Col lg="6" md="6">
              <div className="about__img">
                <motion.img
                  src="https://www.imsresultscount.com/.a/6a00e54f98549c88340191046701ca970c-pi"
                  alt=""
                />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="about__desc fw-bold">
                <p>
                  We provide the best quality with the best available in the
                  concerned location. We consider our quality is the main factor
                  for our growth and brand values. Quality is the major factor
                  to differentiate us in the medicine business from others. We
                  always considered a long-term relationship with our customers.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
          </div>
        </Slider>
      </div>
    );
  }
}
