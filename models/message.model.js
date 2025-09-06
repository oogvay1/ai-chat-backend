import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
    {
        chatId: { type: mongoose.Schema.Types.ObjectId, ref: "chats", required: true },
        sender: { type: String, enum: ["user", "ai"], required: true },
        message: { type: String, required: true }
    },
    { timestamps: true })
    ;

const Message = mongoose.model("messages", chatSchema);

export default Message
