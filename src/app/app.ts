import { Application } from 'https://deno.land/x/oak/mod.ts'
import router from './router.ts';

const host = '127.0.0.1'
const port = '3000'

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`⚡[Server]: Listening at http://${host}:${port}`)
await app.listen(`${host}:${port}`)