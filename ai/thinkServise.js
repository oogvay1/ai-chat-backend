import { aiClient } from "../utils/clientAi.js";

export const thinkServise = async (prompt) => {

    const res = await aiClient.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Explain step by step: ${prompt}`,
    });

    return res.text;
};
