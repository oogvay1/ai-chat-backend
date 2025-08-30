import { aiClient } from "../utils/clientAi.js";

export const chatServise = async (prompt) => {

    const res = await aiClient.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt
    });

    return res.text;
};