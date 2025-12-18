import { prisma } from "../server"; // reuse the existing PrismaClient instance

export default async function getAllPosts() {
  try {
    const posts = await prisma.post.findMany();
    return posts;
  } catch (error) {
    console.error("Failed to get posts", error);
    return [];
  }
}
