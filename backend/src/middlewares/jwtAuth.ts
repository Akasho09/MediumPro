import {verify} from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'; 
import { withAccelerate } from '@prisma/extension-accelerate';

export default async function auth (c:any , next :any ) {
    try { 
        const authToken = await c.req.header("Authorization").split(" ")[1];
        const jwt = await verify(authToken , c.env.JWT_SECRET);
        const prisma = new PrismaClient ({
            datasourceUrl : c.env.DATABASE_URL
        }).$extends(withAccelerate());
        const user = await prisma.usertable.findUnique({
            where : {
                id : jwt.id as string
            }
        })
        if(!user) {
            c.status(403)
            return c.json({
                message : "UnAuth user"
            })
        }
         next()
    } catch(e) {
        c.status(403)
        return c.json({
            message : "UnAuth user 2"
        }) 
    }
}