import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export default async function getClient(c:any , next :any) {
        const prisma = new PrismaClient({
          datasourceUrl: c.env.DATABASE_URL
        }).$extends(withAccelerate());
await next()
}