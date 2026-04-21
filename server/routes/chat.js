import express from "express"
import { addChat, deleteSingleUserConversation, getSingleUserChats } from "../controllers/chat.js";

const router = express.Router()

router.post("/", addChat)
router.get("/:userId", getSingleUserChats)
router.delete("/", deleteSingleUserConversation)

export default router;