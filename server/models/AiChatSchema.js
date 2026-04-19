import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({
    _id: false,
    userId: {
        type: String,
        unique: true,
        required: true
    },
    chats: [
        {
            userText: String,
            aiText: String,
            date: String
        }
    ]
});

const Chat = mongoose.model("Chat", ChatSchema);

export default Chat;