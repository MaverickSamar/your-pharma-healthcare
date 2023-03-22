import React, {useState} from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";
import HeroImg from "../assets/images/arm-chair-01.jpg";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
const items = [
  {
    id: 1,
    src: {HeroImg},
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    id: 2,
    src:{HeroImg},
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    id: 3,
    src: {HeroImg},
    altText: "Slide 3",
    caption: "Slide 3",
  },
];

const About = (args) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Helmet title={"About"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">
                  A certified pharma marketing company
                </p>
                <h2>Your Pharma Healthcare, Serving The Healthcare</h2>
                <p>
                  From one man's vision in 2019 to India's one of leading Pharma
                  marketing units, your Pharma Healthcare, is a certified Pharma
                  marketing company with a rich heritage to follow established
                  in 2020 by Harsh Thakur & Sahiba.Your pharma has evolved
                  state-of-the-art with affordable and quality formulated
                  medicine. We have modular Laboratories and highly experienced
                  Technical staff, resulting in 50% growth yearly.{" "}
                </p>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="about__hero">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                  {...args}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {slides}
                  <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous}
                  />
                  <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                  />
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="trending__products">
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
                  concerned location. We consider our quality is the main factor
                  for our growth and brand values. Quality is the major factor
                  to differentiate us in the medicine business from others. We
                  always considered a long-term relationship with our customers.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="trending__products">
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
      </section>

      <section className="trending__products">
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
      </section>
    </Helmet>
  );
};

export default About;
