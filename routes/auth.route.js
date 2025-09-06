import express from "express";
import { signup, login, logout } from "../controllers/auth.controller.js"
import checkUser from "../middlewares/checkUser.middleware.js";
import checkLogin from "../middlewares/checkLogin.middleware.js";
import check from "../middlewares/checktoken.middleware.js";

const router = express.Router();

router.post('/signup', checkUser, signup);
router.post('/login', checkLogin, login);
router.post('/logout', logout);

router.get('/user', check, );

export default router;
