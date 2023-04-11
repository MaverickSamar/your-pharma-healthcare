import React, {useState} from 'react'
import BlogCard from '../components/UI/BlogCard'
import { Container, Row, Col } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
// import ExpandableCards from '../components/UI/ExpandableCards';
const Blog = () => {

  const [filterProducts, setFilteredProducts] = useState('');

  const handleFilter = () => {

  } 

  return (
    <Helmet title="Blogs">
      <CommonSection title="Blog"/>
      <section>
        <Container>
          <Row>
            <Col>
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option value="">Sort by date</option>
                  <option value="">Ascending</option>
                  <option value="">Descending</option>
                </select>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col>
             {/* <ExpandableCards/> */}
            </Col>
            <Col>
             
            </Col>
          </Row>
        </Container>
      </section>
      
    </Helmet>
  )
}

export default Blog