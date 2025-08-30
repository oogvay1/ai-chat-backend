import openai from "../utils/clientAi.js"

export const chat_controller = async (req, res) => {


    try {
        const { mode, prompt } = req.body;

        chatH.push({ role: "user", content: prompt });
        
        let output;

        if (mode === 'chat') {
            output = await openai.chat.completions.create({
                model: "gpt-4o-mini",
                messages: chatH
            });
        }

        res.json({ mode, output1: output.choices[0].message.content });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    };
};
