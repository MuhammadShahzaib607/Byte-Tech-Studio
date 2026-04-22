import Groq from "groq-sdk";
import dotenv from "dotenv"
import Chat from "../models/AiChatSchema.js"
import { sendRes } from "../utils/responseHandler.js";
import { formatDateTime } from "../utils/formattedDate.js";

dotenv.config()

const groq = new Groq({ apiKey: process.env.API_KEY });

export const addChat = async (req, res) => {
    try {
        let { userId, userText, selectedLanguage } = req.body
        !selectedLanguage ? selectedLanguage = "English" : null
        const prevChats = await Chat.findOne({ userId: userId }) || null
        const history = prevChats ? prevChats?.chats?.map(chat => ([
            { role: "user", parts: [{ text: chat.userText }] },
           { role: "assistant", parts: [{ text: chat.aiText }] }
        ])).flat() : [];
        const finalPrompt = `
### SYSTEM IDENTITY & ROLE
You are the "Senior AI Business Consultant" for ByteTechStudio. Your absolute goal is to convert visitors into high-paying clients by painting a vision of their success.

### ⚠️ CRITICAL RESTRICTION: NO PRICING (ZERO TOLERANCE)
- **STRICTLY FORBIDDEN:** Do NOT mention any numbers, currency symbols ($), ranges (e.g., $5k-$10k), or estimates.
- **ACTION:** If the user asks about price, budget, or "how much", you MUST decline politely using this exact mindset: "Every masterpiece is unique. Once we understand your vision, our Founders will provide a customized quote that ensures the best value."
- **REASONING:** We do not sell packages; we build custom-engineered solutions.

### 📝 RESPONSE STRUCTURE & LENGTH
- **Detail-Oriented:** Do NOT give short, one-paragraph answers. Even for simple questions, explain the "How" and "Why" of our expertise. 
- **The Roadmap:** Breakdown the solution into phases (e.g., Discovery, Development, AI Integration, Deployment) to make the response look comprehensive and professional.
- **Comparison:** Show why ByteTechStudio's MERN + AI approach is superior to standard agencies.

### 🛠 SERVICES TO HIGHLIGHT
- Full-stack MERN Development, AI-Powered Web Apps, Custom Dashboards, E-commerce, and AI Brand Models.
- **Upsell:** "Just as I am helping you right now, we can integrate a similar AI into your business to automate your leads and growth."

### 🌐 LANGUAGE & TONE
- **Language:** Use ONLY ${selectedLanguage}. 
- **Tone:** Professional, Authoritative, and Visionary. If ${selectedLanguage} is Roman Urdu, ensure it sounds like a premium agency, not a local chat.

### 🎯 INPUT DATA
- User Question: ${userText}
- Previous Context: ${JSON.stringify(history)}

### 🚪 MANDATORY CLOSING
Every response MUST end with:
"For further discussion, please contact our founders: +92 3403004439 / +92 3371280194"
`;

        const completion = await groq.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: finalPrompt
                },
                {
                    role: "user",
                    content: userText,
                },
            ],
            model: "llama-3.1-8b-instant",
        });

        const aiResponse = completion.choices[0]?.message?.content || "";
        const updatedChats = await Chat.findOneAndUpdate(
            { userId: userId },
            {
                $push: {
                    chats: {
                        userText,
                        aiText: aiResponse,
                        date: formatDateTime()
                    }
                }
            },
            { upsert: true, new: true }
        )
        sendRes(res, 200, true, "Response get successfully", updatedChats)
    } catch (error) {
        sendRes(res, 400, false, error.message)
        console.log("Error ===>>", error.message)
    }
}

export const getSingleUserChats = async (req, res)=> {
    try {
        const { userId } = req.params;
        const userChats = await Chat.findOne({userId})
        if (!userChats) {
         return sendRes(res, 404, false, "No chats Found")
        }
          sendRes(res, 200, true, "Chats Get Successfully", userChats)
    } catch (error) {
    return sendRes(res, 400, false, error.message)
    }    
}

export const deleteSingleUserConversation = async (req, res)=> {
try {
    const { userId } = req.body
    if (!userId) {
        return sendRes(res, 404, false, "UserId is Required")
    }
    const deletedConversation = await Chat.findOneAndDelete({userId})
sendRes(res, 200, true, "Chats Delete Successfully")
} catch (error) {
    sendRes(res, 400, false, error.message)
}
}