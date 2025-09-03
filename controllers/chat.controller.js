import openai from "../utils/clientAi.js"

const chatH = [];
export const chat_controller = async (req, res) => {

    try {
        const { mode, prompt } = req.body;
        console.log(mode, prompt)

        chatH.push({ role: "user", content: prompt });

        let output;

        output = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: chatH
        });

        res.send({ mode, output: output.choices[0].message.content });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    };
};
