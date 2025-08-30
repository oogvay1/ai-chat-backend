import mongoose from "mongoose";

const checkUser = (req, res, next) => {

    const { fullname, email, password } = req.body;

    if (!fullname || !email || !password) {
        return res.status(400).json({ message: "Each field is required" });
    }

    if (password.length < 6) {
        return res.status(400).json({ message: "Password should be at least 6 characters" });
    }

    const user = 

    next();
}

export default checkUser
