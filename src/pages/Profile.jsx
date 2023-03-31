import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, FormGroup, Form, Button } from "reactstrap";
import { useDispatch } from "react-redux";
import "../styles/checkout.css";
import { motion } from "framer-motion";
import useAuth from "../custom-hooks/useAuth";

const Profile = () => {
  const [tab, setTab] = useState("desc");

  const [updateProf, setUpdateProf] = useState(false);

  const {currentUser} = useAuth();

  return (
    <Helmet title="Profile">
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h2
                  className={`${tab === "desc" ? "active__tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Profile
                </h2>
                <h2
                  className={`${tab === "rev" ? "active__tab" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  My Orders
                </h2>
              </div>
              <br />
              <br />
              {tab === "desc" ? (
                    <div>
                            {
                                updateProf ? 
                                (
                                <div className="tab__content mt-5">
                                    <Form className="billing__form">
                                        <FormGroup className="form__group">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                        />
                                        </FormGroup>
                                        <FormGroup className="form__group" style={{cursor:'no-drop'}}>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            disabled
                                        />
                                        </FormGroup>
                                        <FormGroup className="form__group">
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            required
                                        />
                                        </FormGroup>
                                        <FormGroup className="form__group">
                                        <input
                                            type="number"
                                            placeholder="Phone number"
                                        />
                                        </FormGroup>
                                        <FormGroup className="form__group">
                                        <input type="text" placeholder="Address Line 1" />
                                        </FormGroup>
                                        <FormGroup className="form__group">
                                        <input type="text" placeholder="Address Line 2" />
                                        </FormGroup>
                                        <FormGroup className="form__group">
                                        <input type="text" placeholder="City"/>
                                        </FormGroup>
                                        <FormGroup className="form__group">
                                        <input type="number" placeholder="Pincode"/>
                                        </FormGroup>
                                        <Button outline color="success">Update Profile</Button>
                                        <Button outline color="danger" onClick={()=>setUpdateProf(false)}>Cancel</Button>
                                    </Form>
                                </div>
                            ):(
                                <div>
                                    <div>
                                        <h4>Name : <span>{currentUser.displayName}</span></h4>
                                        <br />
                                        <h4>Email : <span>{currentUser.email}</span></h4>
                                        <br />
                                        <h4>Password : <span>**********</span></h4>
                                        <br />
                                        <h4>Phone Number : <span>{currentUser.phoneNumber}</span></h4>
                                        <br />
                                        <h4>Address : <span>{currentUser.addl1}</span></h4>
                                        <br />
                                        <h4>Locality : <span>{currentUser.locality}</span></h4>
                                        <br />
                                        <h4>City : <span>{currentUser.city}</span></h4>
                                        <br />
                                        <h4>Pincode : <span>{currentUser.pincode}</span></h4>
                                        <br />
                                    </div>
                                    <Button outline color="success" onClick={()=>setUpdateProf(true)}>Update</Button>
                                </div>
                            )
                        }

                        <br />
                           
                    </div>
                    ) : (
                <div className="product__review mt-5">
                  <h1>No orders yet</h1>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Profile;
