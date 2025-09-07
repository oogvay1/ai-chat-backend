import getMessages from "../services/getMessages.service.js";
import openai from "../utils/clientAi.js"

export const text = async (req, res) => {

    try {
        const { prompt } = req.body;

        const messages = await getMessages();

        console.log(messages);
        const output = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are a helpful AI assistant." },
                ...messages,
                { role: "user", content: prompt }]
        });

        res.send({ output: output.choices[0].message.content });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    };
};
