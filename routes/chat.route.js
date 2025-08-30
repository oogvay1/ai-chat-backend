import express from "express";
import { chat_controller } from "../controllers/chat.controller.js";

const router = express.Router();

router.post('/text', chat_controller);

export default router;
