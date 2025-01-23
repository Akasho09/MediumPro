## Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": PostgreSQL database "defaultdb", schema "public" at "akash-aakashbwd-2b66.c.aivencloud.com:16982"

Error: P1001: Can't reach database server at `akash-aakashbwd-2b66.c.aivencloud.com:16982`

Please make sure your database server is running at `akash-aakashbwd-2b66.c.aivencloud.com:16982`.

- JAMAI WIFI KI mkb

## (property) Context<BlankEnv, "/", BlankInput>.env: unknown
.env can get bindings (environment variables, secrets, KV namespaces, D1 database, R2 bucket etc.) in Cloudflare Workers.

@see — https://hono.dev/docs/api/context#env

@example

// Environment object for Cloudflare Workers
app.get('*', async c => {
  const counter = c.env.COUNTER
})


- const app = new Hono<{
  Bindings :{
    DATABASE_URL : String
  }
}>()

- specify type of  Database_url


## REMOVE FKIN HASHES FROM .toml
##       id : id.id as string
## ✘ [ERROR] Error: @prisma/client did not initialize yet. Please run "prisma generate" and try to import it again.
make sure 
import { PrismaClient } from '@prisma/client/edge'
edge not extension


## unsuccessfull attempt
let cachedEnvVars: { [key: string]: string } = {};

app.get('/', async (c) => {
  cachedEnvVars = {
    DATABASE_URL : c.env.DATABASE_URL
  }
  return c.json({
    message : "res"
  })
})

const prisma = new PrismaClient({
  datasourceUrl : cachedEnvVars.DATABASE_URL
})

## route /bulk above /:id 


##         c.status(401)
        return c.json({ error : zodH.data })

writing try and catch , catches errror at c.status and error message isnt recieved 


## return c.json(zodH.error, 401)
catches error 


##  className={`w-full bg-transparent placeholder:text-slate-400 text-${color}-700 text-sm border border--200 rounded-md px-1 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow`}


## serve -s (single page appl SPA)
works only  in -s  mode else 404 
same issue on versel

## vercel not versel
all routes should be redirected to .html 

