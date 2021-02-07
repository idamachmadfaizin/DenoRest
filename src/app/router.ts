import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getBooks } from './http/controllers/book.controller.ts';

const router = new Router()
router
    .get('/books', getBooks)

export default router