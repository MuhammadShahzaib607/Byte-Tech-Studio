import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

export const connectDB = async ()=> {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("database connected successfully")
    } catch (error) {
        console.log("Something Went Wrong", error.message)
    }
}