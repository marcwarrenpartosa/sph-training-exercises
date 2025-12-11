`use client`

import React, { use } from 'react'
import Image from 'next/image';

//components
import Blog from '../../components/blog';

//lib
import getBlogsWithAuthorNames from '../../lib/blogs';


export default function Homepage() {

  const blogs = getBlogsWithAuthorNames();
  /* console.log(blogs); */

  const renderedBlogs = blogs.map((blog) => (
    <Blog key={blog.id} blog={blog} />
  ));

  return (
    <div>
      {renderedBlogs}
    </div>
  )
}
