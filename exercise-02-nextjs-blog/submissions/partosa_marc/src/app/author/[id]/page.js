import getAuthorDetailsById from "../../../../lib/authors";


export default async function AuthorDetailsPage({ params }) {
    const { id } = await params;

    const author = getAuthorDetailsById(id);

    if (!author) {
        return <div>Author not found</div>;
    }
  
    return (
        <div>
            <h1>{author.name}</h1>
            <img src={`/images/${author.image}`} alt={author.name} />
            <p>{author.bio}</p>
        </div>
    );
}
