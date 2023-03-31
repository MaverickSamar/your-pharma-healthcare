import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import img1 from '../../assets/images/about1.png';
import img2 from '../../assets/images/about1.png';
import img3 from '../../assets/images/about1.png';

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
            <motion.img
              src={img1}
              alt=""
            />
          </div>

          <div>
            <motion.img
              src={img2}
              alt=""
            />
          </div>
          <div>
            <motion.img
              src={img3}
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}
