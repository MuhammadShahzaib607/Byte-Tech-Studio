import express from "express"
import dotenv, { populate } from "dotenv"
import cors from "cors"
import helmet from "helmet"
import chatRoutes from "./routes/chat.js"
import ContactRoutes from "./routes/contact.js"
import { connectDB } from "./utils/connectDb.js"
import { sendRes } from "./utils/responseHandler.js"

const app = express()

dotenv.config()
app.use(express.json())
app.use(cors())
app.use(helmet())

app.use("/api/chat", chatRoutes)
app.use("/api/contact", ContactRoutes)

app.get("/", (req, res)=> {
    sendRes(res, 200, true, "API Hit Successfully")
})

app.get("/healthCheck", (req, res)=> {
    sendRes(res, 200, true, "ok")
})

connectDB()

if (process.env.NODE_ENV !== 'production') {
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

export default app;