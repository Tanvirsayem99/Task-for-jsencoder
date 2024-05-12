import mongoose from "mongoose"

const mongoDbConnect = async()=>{
    try {
        const databaseUri:string | any = process.env.MONGODBURI
        await mongoose.connect(databaseUri)
    } catch (error) {
        console.log("there was a error while connecting mongodb",error)
    }
}
export default mongoDbConnect;