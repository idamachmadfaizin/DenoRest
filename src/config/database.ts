import { MongoClient } from 'https://deno.land/x/mongo@v0.21.2/mod.ts'
import { environment } from "./environment.ts"

const client = new MongoClient()
await client.connect(environment.DB_HOST)
// const db = client.connect(environment.DB_HOST)

const db = client.database(environment.DB_NAME)

export default db