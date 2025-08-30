import mongoose from "mongoose";

const connectDB = async () => {

    const URL = process.env.MONGO_URI;

    try {
        await mongoose.connect(URL);

        console.log('Mongo db is connected');
    } catch (err) {
        console.error('Mongo db is not connected');
    }
}

export default connectDB
