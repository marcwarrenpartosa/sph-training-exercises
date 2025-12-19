import { prisma } from "../server"; // reuse the existing PrismaClient instance

export default async function getPostsFromUser(params: { userId: number }) {
  try {
    const postsRaw = await prisma.post.findMany({
        where:{
            authorId : params.userId,
        },
        include:{
          categories: { include: { category: true } },
        }
    });

     //have only catergory name
     const posts = postsRaw.map(post => ({
      ...post,
      categories: post.categories.map(pc => pc.category),
    }));
    

    return posts;
  } catch (error) {
    console.error("Failed to get user's posts", error);
    return [];
  }
}
