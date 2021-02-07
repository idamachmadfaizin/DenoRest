import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getBooks } from './http/controllers/book.controller.ts';
import { UserController } from "./http/controllers/users.controller.ts";

const router = new Router()
router
    .get('/books', getBooks)
    .get('/users', UserController.get)

export default router