import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signUpInput ,signInInput } from '@akash.09/mediumprocommon'

const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL :string,
        JWT_SECRET :string
    }
}>()

userRouter.post('/signup' , async (c)=>{
    try {
      const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
      }).$extends(withAccelerate())
      const body = await c.req.json();
      console.log(body)
      const zodH = signUpInput.safeParse(body);
      if(!zodH.success){
        return c.json(zodH.error)
      }
        const res = await prisma.usertable.create({
          data: {
            email : body.email,
            name : body.name,
            password : body.password
           }
        })
        console.log("here 2")
        const token = await sign({ id : res.id } , c.env.JWT_SECRET);
        return c.json({
          message : "Signed Up!",
          jwt : token
        })
    } catch(e){
      return c.json({ error : "lafda hogaya jii", err : e })
    }
  })
  
  userRouter.post("/signin" , async (c)=>{
    try {
      const body = await c.req.json();
      console.log(body)
      const zodH = signInInput.safeParse(body);
      if(!zodH.success){ 
        c.status(400)
        return c.json({ message: zodH.error }) 
      }
      const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
      }).$extends(withAccelerate())
     
      const user = await prisma.usertable.findFirst({
        where:{
          email : body.email,
          password : body.password
        }, select:{
          name : true,
          id : true
        }
      })
      if(user) {
        const jwt = await sign({id: user.id} ,c.env.JWT_SECRET)
        return c.json({ message : "Welcome " + user.name, jwt : jwt }) 
      }else{
        c.status(403) 
        return c.json({ message : "Invalid email or password" }) 
      }
    } catch(e){ 
      c.status(411)
      return c.text('bahar jaiye aap plz\n' + e);
    }
  })

export {userRouter}