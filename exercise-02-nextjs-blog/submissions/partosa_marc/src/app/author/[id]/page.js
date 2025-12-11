import Image from "next/image";
import styles from '../../page.module.css';
import authorStyles from './page.module.css';

////lib
import getAuthorDetailsById from "../../../../lib/authors";

export default async function AuthorDetailsPage({ params }) {
    const { id } = await params;

    const author = getAuthorDetailsById(id);

    if (!author) {
        return <div>Author not found</div>;
    }
  
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                {author.image && (
                    <Image
                        src={`/images/${author.image}`}
                        alt={author.name}
                        width={200}
                        height={200}
                        className={authorStyles.authorImage}
                    />
                )}
                <h1 className={authorStyles.authorName}>{author.name}</h1>
                <p className={authorStyles.authorBio}>
                    {author.bio}
                </p>
            </div>
        </div>
    );
}
