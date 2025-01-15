import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign , verify } from 'hono/jwt'
import auth2 from './middlewares/jwtAuth' 

const app = new Hono<{
  Bindings :{
    DATABASE_URL : string,
    JWT_SECRET : string,
    id2 : string
    // jwtToken :string
  }
}>()

app.use('/api/v1/blog/*' , auth2 )

app.get('/', async (c) => {
  return c.json({
    message : "res"
  })
})

app.post('/api/v1/signup' , async (c)=>{
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    
    const body = await c.req.json();
      const res = await prisma.usertable.create({
        data: {
          email : body.email,
          name : body.name,
          password : body.password
         }
      })
    
      const token = await sign( { id : res.id } , c.env.JWT_SECRET);
      return c.json({
        jwt : token
      })
  }catch(e){
    console.log("Aii hayee errorr")
    c.status(403)
    return c.json({
      message : "lafda hogaya jii",
      err : e
    })
  }
})

app.post("/api/v1/signin" , async (c)=>{
  try {
    const body = await c.req.json();
    const prisma = new PrismaClient({
      datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate())
   
    const user = await prisma.usertable.findUnique({
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
      return c.json({
        message : "Welcome " + user.name,
        jwt : jwt
      })
    }
  }catch(e){ 
    c.status(403)
    return c.text('bahar jaiye aap plz ' + e);
  }
})

app.post("/api/v1/blog" , (c)=>{

  return c.text('Hello Hono!');

})

app.put("/api/v1/blog" , (c)=>{
  return c.text('Hello Hono!');

})

app.get("/api/v1/blog/:id" , (c)=>{
  return c.text('Hello Hono!');

})
export default app

