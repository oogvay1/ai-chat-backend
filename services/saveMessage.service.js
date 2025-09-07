import Message from "../models/message.model.js";

const saveMessage = async (chatId, sender, message) => {

    try {

        const newMessage = new Message({
            chatId,
            sender,
            message
        });

        await newMessage.save();
    } catch (err) {
        console.error(err);
    };
};

export default saveMessage
