import User from "../models/user.model.js";

export const signup = async (req, res) => {

    const { fullname, email, password } = req.body;

    try {

        const newUser = new User({
            fullname,
            email,
            password
        });

        await newUser.save();

        res.status(201).json({ newUser });
    } catch (err) {
        console.error(err);
    }
}