import React, {useState} from 'react';
import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import '../styles/shop.css';
import products from '../assets/data/products';
import ProductList from '../components/UI/ProductList';

const Shop = () => {

  const [product, setProduct] = useState(products);

  const handleFilter = e => {
    
    const filterValue = e.target.value;
    if(filterValue === 'Tablet'){
      const filteredProducts = products.filter(item => item.category === 'Tablet')
      setProduct(filteredProducts);
    }
    if(filterValue === 'sofa'){
      const filteredProducts = products.filter(item => item.category === 'sofas')
      setProduct(filteredProducts);
    }
    if(filterValue === 'mobile'){
      const filteredProducts = products.filter(item => item.category === 'mobile')
      setProduct(filteredProducts);
    }
    if(filterValue === 'watch'){
      const filteredProducts = products.filter(item => item.category === 'watch')
      setProduct(filteredProducts);
    }
    if(filterValue === 'wireless'){
      const filteredProducts = products.filter(item => item.category === 'wireless')
      setProduct(filteredProducts);
    }
    
  }

  const handleSearch = e => {

    const searchTerm = e.target.value;
      const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

      setProduct(searchedProducts);
    
  }



  return (
    <Helmet title="Products">
      <CommonSection title="Products"/>


      <section>
        <Container>
          <Row>
            <Col lg='3' md='3'>
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="Tablet">Tablets</option>
                  <option value="mobile">Diabetes</option>
                  <option value="sofa">Tuberculosis</option>
                  <option value="watch">Cancer</option>
                  <option value="wireless">Hepatitis-B</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='3'>
            <div className="filter__widget">
                <select name="" id="">
                  <option>Sort</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>

            </Col>
            <Col lg='6' md='6'>
              <div className='search__box'>
                <input type="text" placeholder='Search...' onChange={handleSearch}/>
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>


      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            {
              product.length === 0 ? <h1 className='text-center fs-4'>No products available!</h1>: <ProductList data={product}/>
            }
          </Row>
        </Container>
      </section>
    </Helmet>
    )
}

export default Shop