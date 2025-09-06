import express from "express";
import { text } from "../controllers/chat.controller.js";

const router = express.Router();

router.post('/text', text);

export default router;
