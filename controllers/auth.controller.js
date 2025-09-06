import { loginService } from "../services/login.service.js";
import { signupService } from "../services/signup.service.js";

export const login = async (req, res) => {

    try {

        loginService(req, res);
    } catch (err) {
        console.error(err);
        res.status(200).json({ message: "Internal server error" });
    }
}

export const signup = async (req, res) => {

    try {

        signupService(req, res);
    } catch (err) {
        console.error(err);
        res.status(200).json({ message: "Internal server error" });
    }
}

export const logout = async (req, res) => {

    try {

        res.json({ message: "Loged out successfuly" });
    } catch (err) {
        res.json({ message: "Internal server error" });
    }
}