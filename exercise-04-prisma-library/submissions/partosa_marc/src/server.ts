import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { PrismaClient } from "./generated/prisma/client"; // your generated client
import { PrismaPg } from "@prisma/adapter-pg";

dotenv.config();

const app = express();
const PORT = 3000;


const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

app.use(express.json());

// test db connection
app.get("/", async (req: Request, res: Response) => {
  try {
    await prisma.$connect(); // connect to DB
    const result = await prisma.$queryRaw`SELECT 1;`; 
    res.send(` DB connection OK: ${JSON.stringify(result)}`);
  } catch (error) {
    console.error(" DB connection failed:", error);
    res.status(500).send("DB connection failed");
  } finally {
    await prisma.$disconnect();
  }
});


//this function adds a new user
/* app.get("/adduser", async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.create({
      data: {
        name: "Marc",
        email: "test@gmail.com",
      },
    });
    res.json({ message: "User added successfully", user });
  } catch (error) {
    console.error("Add user failed:", error);
    res.status(500).json({ error: "Failed to add user" });
  }
}); */





app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
