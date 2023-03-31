import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import useGetData from '../custom-hooks/useGetData';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.config';
import {toast} from 'react-toastify';
import {Button} from 'reactstrap';


const Users = () => {

  const { data: userData, loading} = useGetData("users");

  const deleteUser = async(id) => {
    await deleteDoc(doc(db, 'users', id))
    toast.success("User deleted successfully");
  }


  return (
    <section>
      <Container>
        <Row>
          <Col lg='12' className='pt-5'>
            <table className="table">
              <thead>
                <tr>
                  {/* <th>Image</th> */}
                  <th>Username</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              {
                loading? (
                  <h5 className='pt-5 fw-bold'>Loading...</h5>
                ):(
                  userData?.map(user => (
                    <tbody key={user.key}>
                {/* <td>
                  <img src={user.photoUrl} alt="" />
                </td> */}
                <td>
                  {user.displayName}
                </td>
                <td>
                  {user.email}
                </td>
                <td>
                <Button outline color="danger" onClick={()=>{deleteUser(user.uid)}}>Delete</Button>
                </td>
              </tbody>
                  ))
                )
              }
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Users