import db from "../../../config/database.ts"

export interface IUserSchema {
    _id: { $oid: string }
    name: string
    email: string
    password: string
}

const Users = db.collection<IUserSchema>('users')
export default Users