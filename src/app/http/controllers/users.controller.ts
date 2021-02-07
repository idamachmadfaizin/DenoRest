import { Context } from 'https://deno.land/x/oak/mod.ts';
import Users from "../../models/database/user.database.ts";
export class UserController {
    public static async get({request, response}: Context) {
        const users = await Users.find().toArray()

        if (users) {
            response.status = 200
            response.body = users
        } else {
            response.status = 404
            response.body = 'data not found'
        }
    }
}