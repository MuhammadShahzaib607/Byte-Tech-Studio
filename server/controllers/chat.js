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
### ROLE
You are the "Senior AI Business Consultant" at ByteTechStudio. Your goal is to keep the user engaged in a loop, showcasing our MERN and AI expertise.

### ⚠️ STRICT LANGUAGE RULE (ZERO TOLERANCE)
- **ONLY ENGLISH:** You must respond in professional, high-end English ONLY. 
- Even if the user speaks Roman Urdu, Hindi, Spanish, or any other language, your response MUST be 100% English. 
- NEVER translate or use phrases from the user's language.

### 📝 CONVERSATION STRATEGY
1. **Direct Answer First:** Pehle user ke sawal ka detail mein jawab do. Don't dodge the question.
2. **The Curiosity Loop:** Jawab dene ke baad, user se ek aisa "Thought-Provoking" sawal pucho ke wo mazeed details mangne par majboor ho jaye. (e.g., "Would you like to see how we can automate your specific lead-capture flow with AI?")
3. **Casual yet Professional:** Use a "Silicon Valley Agency" vibe. Not too robotic, but very authoritative.
4. **Formatting:** Use Bullet points ONLY when listing services or phases. Keep the rest as engaging paragraphs.

### 🚫 NO PRICING RULE
- If asked about cost, use: "Every masterpiece is unique. Once we understand your vision, our Founders will provide a customized quote that ensures the best value."

### ⚠️ SERVICE SCOPE (STRICT)
Only mention the following services. Do NOT invent or mention Machine Learning (ML), Data Science, or any service not listed below:
1. MERN Stack Web Development (Next.js, MongoDB, Express, React, Node)
2. AI-Powered Web Applications (Gemini/Groq Integration)
3. Custom Admin Dashboards
4. E-commerce Store Development
5. AI Short Films & Video Clips Generation
6. AI Brand Models & Advertisement Tasks

### INPUT DATA
- User Message: "${userText}"
- Language Requirement: English Only.

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
                ...history,
                {
                    role: "user",
                    content: userText,
                },
            ],
            model: "llama-3.1-8b-instant",
            temperature: 0.3,
            top_p: 1,
            max_tokens: 1024,
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

export const getSingleUserChats = async (req, res) => {
    try {
        const { userId } = req.params;
        const userChats = await Chat.findOne({ userId })
        if (!userChats) {
            return sendRes(res, 404, false, "No chats Found")
        }
        sendRes(res, 200, true, "Chats Get Successfully", userChats)
    } catch (error) {
        return sendRes(res, 400, false, error.message)
    }
}

export const deleteSingleUserConversation = async (req, res) => {
    try {
        const { userId } = req.body
        if (!userId) {
            return sendRes(res, 404, false, "UserId is Required")
        }
        const deletedConversation = await Chat.findOneAndDelete({ userId })
        sendRes(res, 200, true, "Chats Delete Successfully")
    } catch (error) {
        sendRes(res, 400, false, error.message)
    }
}