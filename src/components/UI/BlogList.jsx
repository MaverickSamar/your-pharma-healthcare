import React from 'react';
import BlogCard from './BlogCard';

const BlogList = ({data}) => {
  return (
    <>
    {(data || []).map((item, index)=> (
      <BlogCard item={item} key={index}/>
    ))}
    </>
  )
}

export default BlogList