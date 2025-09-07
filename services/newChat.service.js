import Chats from "../models/chat.model.js";
import openai from "../utils/clientAi.js";

const newChat = async (req, res) => {

    const { userId, firstMessage } = req.body;

    try {

        const res = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: "You are a helper that creates short chat titles (max 5 words)."
                },
                {
                    role: "user",
                    content: `Generate a chat title for this message: "${firstMessage}`
                }
            ]
        });

        const title = res.choices[0].message.content.trim();

        const chat = new Chats({
            userId,
            title
        });

        await chat.save();

        res.status(201).json({ chatId: chat._id, title });
    } catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
}

export default newChat
