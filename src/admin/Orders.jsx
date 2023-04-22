import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import useGetData from '../custom-hooks/useGetData';
import { db } from '../firebase.config';
import { doc, deleteDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { Button} from 'reactstrap';

const Orders = () => {

  const {data: productsData, loading} = useGetData('products');
  const orderShipped = async(id) => {
    
    await deleteDoc(doc(db, 'orders', id))
    toast.success("product deleted successfully");

    console.log("working");
  }
  const orderFullfilled = async(id) => {

  }


  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Total Cart</th>
                  <th>Products</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {
                  loading? <h4 className='text-center pt-5 fw-bold'>Loading...</h4>:
                  (
                      productsData.map(item => (
                        <tr key={item.id}>
                          <td>
                            <img src={item.imgUrl} alt="" />
                          </td>
                          <td>{item.productName}</td>
                          <td>{item.category}</td>
                          <td>{item.price}</td>
                          <td>
                            <Button outline color="danger" onClick={()=>{orderShipped(item.id)}}>Delete</Button>
                            {/* <button className="btn-danger btn" onClick={()=>{handleDelete(item.id)}}>Delete</button> */}
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

export default Orders