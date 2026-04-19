import express from "express"
import { addChat } from "../controllers/chat.js";

const router = express.Router()

router.post("/", addChat)

export default router;