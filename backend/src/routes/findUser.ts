import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from 'hono';

const findUser  = new Hono<{
    Bindings:{
        DATABASE_URL : string
    }
    }
    >();

findUser.get('/:n' , async (c)=>{
    const userr = c.req.param("n") ;
    const akash = new PrismaClient ({
      datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());
  
    const userrrr = await akash.usertable.findUnique({
      where: {
        email : userr
      },
    })
    if(!userrrr){
      return c.text("thik hai")
    } else return c.text("chlo oii");
  })


export {findUser}