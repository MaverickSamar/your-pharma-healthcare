import React, {useState} from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import {Link} from 'react-router-dom';
import '../styles/login.css';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../firebase.config.js';
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import {storage} from '../firebase.config';
import { db } from '../firebase.config.js';
import {toast} from 'react-toastify';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Signup = () => 
{
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [phonenumber, setPhonenumber] = useState();
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const signup = async(e) => {

    e.preventDefault()
    setLoading(true)

    try{

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      
      const user = userCredential.user;

      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      
      uploadTask.on((error) => {
        console.log('error occured here');
        toast.error(error.message)
      }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {

          //update user profile
          await updateProfile(user, {
            displayName: username,
            photoURL: downloadURL,
          });
      
          // store user date in firestore database
          await setDoc(doc(db, 'users', user.uid), {
            uid: user.uid,
            displayName:username,
            email,
            photoURL: downloadURL,
          }).catch((error)=> {
            console.log(error);
          })

        }).catch((error)=> {
          console.log(error);
        });
      })
      console.log(user);
      setLoading(false);
      toast.success("Account created successfully");
      navigate('/login');


    }catch(error)
    {
      setLoading(false);
      toast.error('Something went wrong.')
    }

  }

  const uploadImage = (e) => {
    e.preventDefault();
    const fileToRead = document.getElementById("avatar");
    var files = fileToRead.files;
    setFile(files[0]);
    // if (files.length) {
    //     console.log("Filename: " + files[0].name);
    //     console.log("Type: " + files[0].type);
    //     console.log("Size: " + files[0].size + " bytes");
    // }
  }

  return (
    <Helmet title='Signup'>
      <section>
        <Container>
          <Row>
            {
              loading? (<Col className='text-center'>
              <h5 className='fw-bold'>Loading...</h5>
              </Col>) :
                <Col lg='6' className="text-center m-auto">
                <h3 className="fw-bold mb-4">
                  Sign Up
                </h3>
  
                <Form className="auth__form" onSubmit={signup}>
                  <FormGroup className="form__group">
                    <input type="text" placeholder='Enter your name' value={username} onChange={e=>setUsername(e.target.value)}/>
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input type="email" placeholder='Enter your email' value={email} onChange={e=>setEmail(e.target.value)}/>
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input type="password" placeholder='Enter your password' value={password} onChange={e=>setPassword(e.target.value)}/>
                  </FormGroup>
                  {/* <FormGroup className="form__group">
                    <input type="number" placeholder='Enter your phone number' value={phonenumber} onChange={e=>setPhonenumber(e.target.value)}/>
                  </FormGroup> */}
                  <FormGroup className="form__group">
                    {/* <input type="image" placeholder='Choose avatar' value={file} onChange={uploadImage}/> */}
                    <input type="file"placeholder='Choose avatar' id="avatar" name="avatar" accept="image/*" onChange={uploadImage} />
                    {file && <img src={window.URL.createObjectURL(file)} alt="avatar" className="avatar__image"/>}
                  </FormGroup>
  
                  <button type='submit' className="buy__btn auth__btn">
                    Create an account
                  </button>
                  <p>Already have an account? <Link to='/login'>Login</Link></p>
                </Form>
              </Col>
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Signup