import React, {useState} from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';

const AddProducts = () => {

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h4 className='mb-4'>Add Products</h4>
            <Form>
              <FormGroup className='form__group'>
                <span>Product title</span>
                <input type="text" placeholder='Vomo-It'/>
              </FormGroup>
              <FormGroup className='form__group'>
                <span>Short Description</span>
                <input type="text" placeholder='lorem.......'/>
              </FormGroup>
              <FormGroup className='form__group'>
                <span>Description</span>
                <input type="text" placeholder='Description......'/>
              </FormGroup>
              <div>

                <FormGroup className='form__group'>
                  <span>Price</span>
                  <input type="number" placeholder='₹100'/>
                </FormGroup>

                <FormGroup className='form__group'>
                  <span>Category</span>
                  <select>
                    <option value="Tablet">Diabetes</option>
                    <option value="sofa">Tuberculosis</option>
                    <option value="mobile">Cancer</option>
                    <option value="watch">Stomach</option>
                    <option value="wireless">Nefro</option>
                  </select>
                </FormGroup>

              </div>

              {/* <div>

                <FormGroup>
                  <span>Product Image</span>
                  <input type="file"placeholder='Choose avatar' id="avatar" name="avatar" accept="image/*" onChange={uploadImage} />
                    {file && <img src={window.URL.createObjectURL(file)} alt="avatar" className="avatar__image"/>}

                </FormGroup>

              </div> */}
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AddProducts