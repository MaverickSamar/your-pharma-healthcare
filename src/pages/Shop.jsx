import React, {useState, useEffect} from 'react';
import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import '../styles/shop.css';
import ProductList from '../components/UI/ProductList';
import useGetData from '../custom-hooks/useGetData';


const Shop = () => 
{
  const [product, setProduct] = useState([]);

  const {data: products, loading} = useGetData('products');

  useEffect(() => {
    const getPosts = () => {
      setProduct(products);
    }
    getPosts();
  });


  const handleFilter = e => {
    
    const filterValue = e.target.value;
    if(filterValue === 'Tablet')
    {
      const filteredProducts = products.filter(item => item.category === 'Tablet')
      setProduct(filteredProducts);
    }
    if(filterValue === 'Capsule'){
      const filteredProducts = products.filter(item => item.category === 'Capsule')
      setProduct(filteredProducts);
    }
    if(filterValue === 'Syrup'){
      const filteredProducts = products.filter(item => item.category === 'Syrup')
      setProduct(filteredProducts);
    }
    if(filterValue === 'Powder'){
      const filteredProducts = products.filter(item => item.category === 'Powder')
      setProduct(filteredProducts);
    }
    if(filterValue === 'Equipment'){
      const filteredProducts = products.filter(item => item.category === 'Equipment')
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
                  <option value="Capsule">Capsules</option>
                  <option value="Syrup">Syrups</option>
                  <option value="Powder">Powders</option>
                  <option value="Equipment">Equipments</option>
                </select>
              </div>
            </Col>
            {/* <Col lg='3' md='6' className='text-end'>
            <div className="filter__widget">
                <select name="" id="">
                  <option>Sort</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>

            </Col> */}
            <Col lg='6' md='12'>
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
              product.length === 0 ? <h1 className='text-center fs-4'>No products available!</h1>:( (loading)?(<h1 className='text-center fs-4'>Loading...</h1>) :
              (<ProductList data={product}/>))
            }
          </Row>
        </Container>
      </section>
    </Helmet>
    )
}

export default Shop