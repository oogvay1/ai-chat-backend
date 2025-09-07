import Message from "../models/message.model.js";

const getMessages = async () => {

    const messages = await Message.find({}).sort({createdAt: -1});
    return messages
}

export default getMessages
