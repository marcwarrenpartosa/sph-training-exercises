import blogs from "../data/blogs.json";
import authors from "../data/authors.json";

export default function getBlogsWithAuthorNames() {
    // Map through blogs and attach author name
    const blogsWithAuthors = blogs.map(blog => {
      const author = authors.find(a => a.id === blog.author);
      return {
        ...blog,
        authorName: author ? author.name : "Unknown" // add authorName field
      };
    });
  
    return blogsWithAuthors;
}

export function getBlogDetailsById(id) {
    const blog = blogs.find(blog => blog.id === id);
    
    if (!blog) return null;
    
    const author = authors.find(a => a.id === blog.author);
    return {
      ...blog,
      authorName: author ? author.name : "Unknown"
    };
}


export function getBlogFilters() {
  const years = [...new Set(blogs.map(blog => new Date(blog.date).getFullYear()))];

  const tags = [...new Set(blogs.flatMap(blog => blog.tags))];
  
  return {
    years: years.sort((a, b) => b - a), // Sort years descending
    tags: tags.sort() // Sort tags alphabetically
  };
}