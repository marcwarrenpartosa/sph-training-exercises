import Image from "next/image";


//lib
import { getBlogDetailsById } from "../../../../lib/blogs";

export default async function BlogDetailsPage({ params }) {
    const { id } = await params;

    const blog = getBlogDetailsById(id);
  
    return (
        <div >
        
          {blog.image && (
            <Image
              src={`/images/${blog.image}`}
              alt={blog.title}
              width={800}
              height={450}
            />
          )}
          <h2>{blog.title}</h2>
       
        <p>By: {blog.authorName}</p>
        <p>{blog.description}</p>
        <p>{blog.content}</p>
      </div>
    );
  }
