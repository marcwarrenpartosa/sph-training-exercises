import { prisma } from "../server"; // reuse the existing PrismaClient instance

export default async function getCountOfUserPosts(params: { userId: number }) {
  try {
    const posts = await prisma.post.findMany({
        where:{
            authorId : params.userId,
        }
    });
    return posts.length;
  } catch (error) {
    console.error("Failed to get user's posts", error);
    return [];
  }
}
