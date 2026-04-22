import Contact from "../models/ContactSchema.js"
import { sendRes } from "../utils/responseHandler.js"

export const addContact = async (req, res) => {
    try {
        const { fullname, email, phone, note, userId } = req.body
        if (!fullname || !email || !phone || !userId) {
            return sendRes(res, 400, false, "Missing fields")
        }
        const newContact = await new Contact({
            fullname, email, phone, userId, note
        })
        const savedContact = await newContact.save()
        sendRes(res, 200, true, "Contact Saved Successfully")
    } catch (error) {
        sendRes(res, 400, false, error.message)
    }
}

export const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ _id: -1 })
        sendRes(res, 200, true, "Contacts Get Successfully", contacts)
    } catch (error) {
        sendRes(res, 400, false, error.message)
    }
}

export const deleteSingleContact = async (req, res) => {
    try {
        const { _id: id } = req.body
        if (!id) {
           return sendRes(res, 400, false, "Id is Required")
        }
        const deletedContact = await Contact.findByIdAndDelete(id)
        sendRes(res, 200, true, "Contact Delete Successfully")
    } catch (error) {
sendRes(res, 400, false, error.message)
    }
}