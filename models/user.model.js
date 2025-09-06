import mongoose from "mongoose";
import bcrypt from "bcrypt"
import { hashPassword } from "../utils/hashPassword.utils.js";

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
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

userSchema.methods.matchPassword = async function (enteredPassword) {

    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
    if (!this.isModified("password")) return next();

    try {
        this.password = await hashPassword(this.password);

        next();
    } catch (err) {
        next(err);
    }
});

const User = mongoose.model("users", userSchema)

export default User
