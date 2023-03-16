import React, {useState} from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import {Link} from 'react-router-dom';
import '../styles/login.css';

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState();
  const [file, setFile] = useState(null);


  return (
    <Helmet title='Signup'>
      <section>
        <Container>
          <Row>
            <Col lg='6' className="text-center m-auto">
              <h3 className="fw-bold mb-4">
                Login
              </h3>

              <Form className="auth__form">
                <FormGroup className="form__group">
                  <input type="text" placeholder='Enter your name' value={username} onChange={e=>setUsername(e.target.value)}/>
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="email" placeholder='Enter your email' value={email} onChange={e=>setEmail(e.target.value)}/>
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="password" placeholder='Enter your password' value={password} onChange={e=>setPassword(e.target.value)}/>
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="number" placeholder='Enter your phone number' value={phonenumber} onChange={e=>setPhonenumber(e.target.value)}/>
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="file" placeholder='Choose avatar' value={file} onChange={e=>setFile(e.target.file)}/>
                </FormGroup>

                <button type='submit' className="buy__btn auth__btn">
                  Create an account
                </button>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Signup