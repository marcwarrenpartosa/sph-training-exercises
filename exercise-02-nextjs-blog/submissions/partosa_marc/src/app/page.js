"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

//components
import Blog from '../../components/blog';
import SearchBar from '../../components/search-bar';
import FilterPopover from '../../components/filter-popover';

//lib
import getBlogsWithAuthorNames, { getBlogFilters } from '../../lib/blogs';

export default function Homepage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  
  const blogs = getBlogsWithAuthorNames();
  const availableFilters = getBlogFilters();

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesYear = selectedYears.length === 0 || selectedYears.includes(new Date(blog.date).getFullYear());
    const matchesTags = selectedTags.length === 0 || blog.tags.some(tag => selectedTags.includes(tag));
    
    return matchesSearch && matchesYear && matchesTags;
  });

  const handleYearToggle = (year) => {
    setSelectedYears(prev => 
      prev.includes(year) ? prev.filter(y => y !== year) : [...prev, year]
    );
  };

  const handleTagToggle = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleClearAll = () => {
    setSelectedYears([]);
    setSelectedTags([]);
  };

  const renderedBlogs = filteredBlogs.map((blog) => (
    <Blog key={blog.id} blog={blog} />
  ));

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Blog</h1>
        <div className={styles.searchContainer}>
          <SearchBar onSearch={setSearchQuery} />
          <FilterPopover 
            filters={availableFilters}
            selectedYears={selectedYears}
            selectedTags={selectedTags}
            onYearToggle={handleYearToggle}
            onTagToggle={handleTagToggle}
            onClearAll={handleClearAll}
          />
        </div>
        <div className={styles.blogList}>
          {renderedBlogs}
        </div>
      </div>
    </div>
  );
}
