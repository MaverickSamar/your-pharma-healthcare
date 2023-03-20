import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import useGetData from '../custom-hooks/useGetData';
import { db } from '../firebase.config';
import { doc, deleteDoc } from 'firebase/firestore';

const AllProducts = () => {

  const {data: productsData, loading} = useGetData('products');

  const handleDelete = () => {

    console.log("working");
  }


  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  loading? <h4 className='text-center py-5 fw-bold'>Loading...</h4>:
                  (
                      productsData.map(item => (
                        <tr key={item.id}>
                          <td>
                            <img src={item.imgUrl} alt="" />
                          </td>
                          <td>{item.title}</td>
                          <td>{item.category}</td>
                          <td>{item.price}</td>
                          <td>
                            <button className="btn-danger btn" onClick={handleDelete}>Delete</button>
                          </td>
                        </tr>
                      ))
                  )
                }
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AllProducts