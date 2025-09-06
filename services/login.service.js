import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";

export const loginService = async (req, res) => {

    const { email, password } = req.body;
    const user = await User.findOne({ email });

    try {
        if (user && (await user.matchPassword(password))) {

            const token = generateToken({ id: user._id, role: user.role });

            return res.json({
                id: user.id,
                fullname: user.fullname,
                email: user.email,
                token: token
            });
        };
    } catch (err) {
        console.error(err);
    };
};
