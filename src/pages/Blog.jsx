import React, {useState} from 'react'
import BlogCard from '../components/UI/BlogCard'
import { Container, Row, Col } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import BlogCommon from '../components/UI/BlogCommon';
import ExpandableCards from '../components/UI/ExpandableCards';
const Blog = () => {

  const [filterProducts, setFilteredProducts] = useState('');

  const handleFilter = () => {

  } 

  return (
    <Helmet title="Blogs">
      <BlogCommon title="Blog"/>
      <section>
        <Container>
          <Row>
            <Col>
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option value="">Sort by date</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
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
             <ExpandableCards/>
            </Col>
            <Col>
              Blog element goes here
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
          </Row>
        </Container>
      </section>
      
    </Helmet>
  )
}

export default Blog