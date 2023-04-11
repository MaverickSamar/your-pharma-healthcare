import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../../styles/blog-card.css";


const item = {
    img: 'https://aihms.in/blog/wp-content/uploads/2020/04/his1.jpg',
    category: 'Medical',
    title: 'How does blogging works',
    desc: 'Wel I am a developer not a content writer so I do not know about this',
    author: 'Samarth Ranjan',
    time: '1 hour'
  }

const BlogCard = () => {
  return (
    <>
      <Col lg="4" md="4">
        <Link to='/blog/:id'>
        <motion.div class="blog-card blog-card-blog">
          <div class="blog-card-image">
            <a href="/blog/:id">
              {" "}
              <img
                class="img"
                src={item.img}
                alt="img"
              />{" "}
            </a>
            <div class="ripple-cont"></div>
          </div>
          <div class="blog-table">
            <h6 class="blog-category blog-text-success">
              <i class="far fa-newspaper"></i> {item.category}
            </h6>
            <h4 class="blog-card-caption">
              <a href="/blog">
                {item.title}
              </a>
            </h4>
            <p class="blog-card-description">
              {item.desc}{" "} <a href="/blog">continue reading{">>"} </a>
            </p>
            <div class="ftr">
              <div class="author">
                <a href="/blog/authors">
                  <span>{item.author}</span>{" "}
                </a>
              </div>
              <div class="stats">
                {" "}
                <i class="far fa-clock"></i> {item.time}{" "}
              </div>
            </div>
          </div>
        </motion.div>
        </Link>
      </Col>
    </>
  );
};

export default BlogCard;
