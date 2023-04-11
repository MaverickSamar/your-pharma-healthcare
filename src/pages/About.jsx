import React, {useState} from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";
import Carousel from '../components/UI/Carousel'
import CarouselComponent from "../components/UI/CarouselComponent";
import Services from "../services/Services";


const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

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
                <Carousel/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Services/>
        </Container>
      </section>
      <section className="trending__products">
        <Container>
          <CarouselComponent/>
        </Container>
      </section>


    </Helmet>
  );
};

export default About;
