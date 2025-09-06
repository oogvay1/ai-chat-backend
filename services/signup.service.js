import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";

export const signupService = async (req, res) => {

    const { email, password } = req.body;

    try {

        const newUser = new User({
            email,
            password
        });

        const token = generateToken({id: newUser._id, role: newUser.role});

        await newUser.save();

        const userRes = newUser.toObject();
        userRes.token = token;
        delete userRes.password;

        res.status(201).json(userRes);
    } catch (err) {
        console.error(err);
    }
};