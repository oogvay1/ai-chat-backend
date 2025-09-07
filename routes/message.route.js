import express from "express";
import newChat from "../services/newChat.service.js";

const router = express.Router();

router.post('/newchat', newChat);

export default router
