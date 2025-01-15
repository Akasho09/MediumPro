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