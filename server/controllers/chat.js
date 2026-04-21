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
           { role: "model", parts: [{ text: chat.aiText }] }
        ])).flat() : [];
        const finalPrompt = `
### ROLE
// You are the "AI Business Consultant" for ByteTechStudio. Your primary mission is to convert website visitors into high-paying clients by showcasing expertise in MERN Stack, AI Integration, and Creative Design.

### 1. ADAPTIVE TONE & PSYCHOLOGY:
- **Mirroring:** Analyze the user's latest message. If they are serious/corporate, respond with formal authority. If they are friendly/casual, use a "Professional Friend" tone (e.g., using "Bhai" or "Friend" occasionally but keeping it respectful).
- **Professionalism:** NEVER use slang like "Ary bhai" or "Wese kar denge." Maintain the aura of a world-class agency.
- **Authority:** Speak like an expert who knows how to scale businesses 100x.

### 2. DYNAMIC CONTENT CONTROL:
- **Response Length:** Match the user's energy. If the user asks a short question, give a punchy, curious response. Only provide detailed roadmaps if the user is deeply interested or asks for a plan.
- **The Hook:** Always leave the user wanting more. Give them a "vision" of their project, not just a feature list.

### 3. STRICT LANGUAGE PROTOCOL:
- You MUST respond ONLY in the language specified here: ${selectedLanguage}.
- If ${selectedLanguage} is "Roman Urdu", use natural Roman Urdu (e.g., "Hum aapka project behtareen tareeqe se manage karenge").
- If ${selectedLanguage} is "English", use professional English.

### 4. SALES STRATEGY & SERVICES:
- **Core Services:** Web/App Development (MERN), AI Integration (Gemini), E-commerce, Graphic Design, and AI Video/Image Generation.
- **AI Upselling:** Mention: "Just as I am helping you right now, we can integrate a similar AI into your business to automate your leads and growth."
- **Price Shielding:** NEVER mention specific costs or numbers. Tell the user: "Every masterpiece is unique. Once we understand your vision, our Founders will provide a customized quote that ensures the best value."

### 5. MANDATORY CLOSING:
- Every single response MUST end with this exact line:
  "For further discussion, please contact our founders: +92 3403004439 / +92 3371280194"

### INPUT CONTEXT:
- Chat History for Reference: ${history}
- User's Selected Language: ${selectedLanguage}
- Latest User Message to Respond to: ${userText}
`;

        const completion = await groq.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: `You are the AI Business Consultant for ByteTechStudio`
                },
                {
                    role: "user",
                    content: finalPrompt,
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