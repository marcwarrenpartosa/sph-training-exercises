import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { PrismaClient } from "./generated/prisma/client"; // your generated client
import { PrismaPg } from "@prisma/adapter-pg";


//posts
import getPostsWithAuthors from "./posts/getPostsWithAuthors";
import getAllPosts from "./posts/getAllPosts";
import getPostsFromUser from "./posts/getPostsFromUser";
import getCountOfUserPosts from "./posts/getCountOfUserPosts";

dotenv.config();

const app = express();
const PORT = 3000;

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
export const prisma = new PrismaClient({ adapter }); // export prisma so other files can reuse it

app.use(express.json());

// Test DB connection
app.get("/", async (req: Request, res: Response) => {
  try {
    await prisma.$connect();
    const result = await prisma.$queryRaw`SELECT 1;`;
    res.send(`DB conn OK: ${JSON.stringify(result)}
    Go to the following links to use queries: 1.)"/query1" to get all posts with authors; `);

  } catch (error) {
    console.error("DB conn failed:", error);
    res.status(500).send("DB conn failed");
  }
});

// Get all posts with authors
app.get("/query1", async (req: Request, res: Response) => {
  try {
    const posts = await getPostsWithAuthors();
    res.json(posts);
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    res.status(500).send("Failed to fetch posts");
  }
});

// Get all posts
app.get("/query2", async (req: Request, res: Response) => {
  try {
    const posts = await getAllPosts();
    res.json(posts);
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    res.status(500).send("Failed to fetch posts");
  }
});

// Get all post from user
app.get("/query3/:userId", async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId, 10);
    const posts = await getPostsFromUser({ userId });
    res.json(posts);
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    res.status(500).send("Failed to fetch posts");
  }
});


// Get count of all user's post
app.get("/query4/:userId", async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId, 10);
    const posts = await getCountOfUserPosts({ userId });
    res.json("User " + userId +" has " + posts + " posts");
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    res.status(500).send("Failed to fetch posts");
  }
});




app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
