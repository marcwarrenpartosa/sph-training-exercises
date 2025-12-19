import { prisma } from "../server"; // reuse the existing PrismaClient instance

export default async function getAllPosts() {
  try {
    const postsRaw = await prisma.post.findMany({
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
    console.error("Failed to get posts", error);
    return [];
  }
}
