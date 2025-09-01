import User from "../models/user.model.js";

const checkLogin = async (req, res, next) => {

    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    try {

        if (!fullname || !email || !password) {

            res.status(400).json({ message: "Each field is required" });
        }

        if (!user) {

            res.status(400).json({ message: "Invalid credentials" });
        }

        next();
    } catch (err) {
        console.error(err);
    }
}

export default checkLogin
