import express from "express";
import signup from "../services/signup.service.js";
import checkUser from "../middlewares/checkUser.middleware.js";

const router = express.Router();

router.post('/signup', checkUser, signup);

export default router;
