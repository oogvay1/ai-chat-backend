import express from "express";
import { signup } from "../services/signup.service.js";
import checkUser from "../middlewares/checkUser.middleware.js";
import { login } from "../services/login.service.js";
import checkLogin from "../middlewares/checkLogin.middleware.js";

const router = express.Router();

router.post('/signup', checkUser, signup);
router.post('/login', checkLogin, login);

export default router;
