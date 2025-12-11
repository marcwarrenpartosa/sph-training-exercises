"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

//components
import Blog from '../../components/blog';
import SearchBar from '../../components/search-bar';

//lib
import getBlogsWithAuthorNames from '../../lib/blogs';

export default function Homepage() {
  const [searchQuery, setSearchQuery] = useState('');
  const blogs = getBlogsWithAuthorNames();

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderedBlogs = filteredBlogs.map((blog) => (
    <Blog key={blog.id} blog={blog} />
  ));

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Blog</h1>
        <SearchBar onSearch={setSearchQuery} />
        <div className={styles.blogList}>
          {renderedBlogs}
        </div>
      </div>
    </div>
  );
}
