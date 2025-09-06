import openai from "../utils/clientAi.js"

const chatH = [];
export const text = async (req, res) => {

    try {
        const { mode, prompt } = req.body;

        chatH.push({ role: "user", content: prompt });

        let output;

        output = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: chatH
        });

        chatH.push({ role: "ai", content: output.choices[0].message.content });

        res.send({ mode, output: output.choices[0].message.content });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    };
};
