
const signup = (req, res) => {

    const { fullname, email, password } = req.body;

    try {
        
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: "Internal server error" });
    }
}

export default signup
