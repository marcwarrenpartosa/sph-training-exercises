import { prisma } from "../server";

export default async function getPostsWithAuthorsAndCategories() {
  try {
    const postsRaw = await prisma.post.findMany({
      include: {
        author: true,
        categories: { include: { category: true } },
      },
    });

  //have only catergory name
    const posts = postsRaw.map(post => ({
      ...post,
      categories: post.categories.map(pc => pc.category),
    }));

    return posts;
  } catch (error) {
    console.error("Failed to get posts with authors and categories:", error);
    return [];
  }
}
