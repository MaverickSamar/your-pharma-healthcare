import React from 'react';
import {Container, Row, Col} from "reactstrap";
import {useParams } from 'react-router-dom';
import products from '../assets/data/products';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';



const ProductDetails = () => {

  const {id} = useParams();
  const product = products.find(item=> item.id === id)

  const {imgUrl, productName, price, avgRating, review, description } = product;


  return (
      <Helmet >
        <CommonSection/>


        <section className='pt-0'>
          <Container>
            <Row>
              <Col lg='6'>
                <img src={imgUrl} alt="" />
              </Col>
              <Col lg='6'>
                <h2>productName</h2>
                <div className="product__rating">
                  <div>
                    <span>
                      <i class='ri-star-s-fill'></i>
                    </span>
                    <span>
                      <i class='ri-star-s-fill'></i>
                    </span>
                    <span>
                      <i class='ri-star-s-fill'></i>
                    </span>
                    <span>
                      <i class='ri-star-s-fill'></i>
                    </span>
                    <span>
                      <i class='ri-star-half-s-line'></i>
                    </span>

                    <p>({avgRating } ratings)</p>
                  </div>

                  <span>{price}</span>
                  <p>{description}</p>


                </div>

              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
  )
}

export default ProductDetails