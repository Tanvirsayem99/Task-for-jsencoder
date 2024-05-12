import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
},{
    timestamps:true
})

const Users = mongoose.models.users || mongoose.model("users",usersSchema)
export default Users;