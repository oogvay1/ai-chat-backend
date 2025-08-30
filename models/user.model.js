import mongoose from "mongoose";
import bcrypt from "bcrypt"
import { hashPassword } from "../utils/hashPassword.utils.js";

const userSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
            default: "user",
        }
    },
    { timestamps: true }
);

userSchema.methods.matchPassword = async (enteredPassword) => {

    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async (next) => {
    if (!this.isModified('password')) return next();

    try {
        this.password = await hashPassword(this.password);

        next();
    } catch (err) {
        next(err);
    }
});

const User = mongoose.model("users", userSchema)

export default User
