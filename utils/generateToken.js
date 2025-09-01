import jwt from "jsonwebtoken"

const generateToken = ({ id, role }) => {

    const token = jwt.sign(
        { id: id, role: role },
        process.env.JWT_SECRET,
        { expiresIn: "30d" }
    );

    return token;
}

export default generateToken;
