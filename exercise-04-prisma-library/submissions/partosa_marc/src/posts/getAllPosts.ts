import { prisma } from "../server"; // reuse the existing PrismaClient instance

interface GetAllPostsParams {
  page?: number;   
  limit?: number;  
}

export default async function getAllPosts({ page = 1, limit = 2 }: GetAllPostsParams = {}) {
  try {
    const skip = (page - 1) * limit;

    const postsRaw = await prisma.post.findMany({
      skip,
      take: limit,
      include: {
        categories: { include: { category: true } },
      },
    });

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
