import { prisma } from "../server"; // reuse the existing PrismaClient instance

export default async function getPostsByCategoryAndStatus(params: { categoryId: number, status: number }) {

  const status = params.status === 1 ? true : false;

  const postsRaw = await prisma.post.findMany({
    where: {
      categories: {
        some: {
          categoryId: params.categoryId,
        },
      },
      published: status,
    },
    include: {
      categories: { include: { category: true } },
    },
  });

  // include only category name
  const posts = postsRaw.map(post => ({
    ...post,
    categories: post.categories.map(pc => pc.category.name), // only the name
  }));

  return posts;
}
