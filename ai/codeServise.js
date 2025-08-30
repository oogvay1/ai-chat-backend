import { aiClient } from "../utils/clientAi.js";

export const codeServise = async (prompt) => {

    const res = await aiClient.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Write ONLY code and if needed explain for: ${prompt}`
    });

    return res.text;
};