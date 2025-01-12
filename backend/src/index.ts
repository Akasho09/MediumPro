import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'

const app = new Hono<{
  Bindings :{
    DATABASE_URL : string,
    JWT_SECRET : string
  }
}>()

app.get('/', async (c) => {
  return c.json({
    message : "res"
  })
})

app.post('/api/v1/signup' , async (c)=>{
  const body = await c.req.json();
console.log(body)

const prisma = new PrismaClient({
  datasourceUrl: "prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiZTc3YjA5NzgtODAwMy00NzEzLTgwNmYtNzU3OWQ5YzUwM2Y5IiwidGVuYW50X2lkIjoiMzVkY2Q3ZTViMjRkMTMxNDZjYjJmMTQ5NzFhM2IyZDdlNDYxZjg0ZDM0MTM1OTk3NWFlNWQ3NDA2MDE2ZTA4NSIsImludGVybmFsX3NlY3JldCI6IjcyYjk3MzdkLWZmYTItNDY2YS1iZGE0LWVkMGExNDRmNmZkMiJ9.RrjdQwdkw6jL-q5zkZngGhNzwbjJsl2KoyzSKlirTCU"
}).$extends(withAccelerate());

 console.log("body")

  const res = await prisma.usertable.create({
    data: {
      email : body.email,
      name : body.name,
      password : body.password
     }
  })

  const token = await sign( { id : res.id } , "c.env.JWT_SECRET");
  return c.json({
    jwt : token
  })
})

app.post("/api/v1/signin" , (c)=>{
  return c.text('Hello Hono!');

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

