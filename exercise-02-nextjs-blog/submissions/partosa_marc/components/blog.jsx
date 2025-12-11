import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./blog.module.css";

export default function Blog({ blog }) {
  console.log(blog.id);

  return (
    <div className={styles.blogCard}>
      <Link href={`/blog/${blog.id}`}>
        {blog.image && (
          <Image
            src={`/images/${blog.image}`}
            alt={blog.title}
            width={800}
            height={450}
            style={{ objectFit: "cover" }}
          />
        )}
        <h2>{blog.title}</h2>
        <p>{blog.description}</p>
        <p style={{ fontSize: "13px", color: "#999" }}>By {blog.authorName}</p>
      </Link>
    </div>
  );
}
