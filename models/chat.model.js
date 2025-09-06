import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "users", required: true},
    title: {type: String, default: "New Chat"}
}, {timestamps: true});

const Chats = mongoose.model("chats", chatSchema);

export default Chats
