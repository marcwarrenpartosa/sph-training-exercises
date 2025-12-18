import { prisma } from "../server"; // reuse the existing PrismaClient instance

export default async function getPostsWithAuthors() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: true, // include the author of each post
      },
    });
    return posts;
  } catch (error) {
    console.error("Failed to get posts with authors:", error);
    return [];
  }
}
