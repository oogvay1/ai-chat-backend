import User from "../models/user.model.js";

const checkUser = async (req, res, next) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Each field is required" });
    }

    if (password.length < 6) {
        return res.status(400).json({ message: "Password should be at least 6 characters" });
    }

    const user = await User.findOne({ email });

    if (user) {
        return res.status(400).json({ message: "This email is already exist" });
    }

    next();
}

export default checkUser
