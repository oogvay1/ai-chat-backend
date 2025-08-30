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

        const userRes = newUser.toObject();
        delete userRes.password;

        res.status(201).json(userRes);
    } catch (err) {
        console.error(err);
    }
};