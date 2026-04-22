import express from "express"
import { addContact, deleteSingleContact, getAllContacts } from "../controllers/contact.js";

const router = express.Router()

router.post("/", addContact)
router.get("/", getAllContacts)
router.delete("/", deleteSingleContact)

export default router;