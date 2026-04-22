import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: false,
        default: ""
    },
});

const Contact = mongoose.model("Contact", ContactSchema);

export default Contact;