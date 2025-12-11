import Image from "next/image";
import Link from "next/link";
import styles from '../../page.module.css';
import blogStyles from './page.module.css';

//lib
import { getBlogDetailsById } from "../../../../lib/blogs";

export default async function BlogDetailsPage({ params }) {
    const { id } = await params;

    const blog = getBlogDetailsById(id);
  
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                {blog.image && (
                    <Image
                        src={`/images/${blog.image}`}
                        alt={blog.title}
                        width={800}
                        height={450}
                        className={blogStyles.blogImage}
                    />
                )}
                <h1 className={blogStyles.blogTitle}>{blog.title}</h1>
                <Link href={`/author/${blog.author}`}>
                    <p className={blogStyles.blogAuthor}>
                        By: {blog.authorName}
                    </p>
                </Link>
                <p className={blogStyles.blogDescription}>
                    {blog.description}
                </p>
                <div className={blogStyles.blogContent}>
                    {blog.content}
                </div>
            </div>
        </div>
    );
}
