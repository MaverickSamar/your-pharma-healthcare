import React from 'react'
import { Container } from 'reactstrap';
import '../../styles/blog-common.css'
const CommonSection = ({title}) => 
{
  return (
    <section className="common__section-blog">
        <Container className='text-center'>
            <h1>{title}</h1>
        </Container>
    </section>
  )
}

export default CommonSection