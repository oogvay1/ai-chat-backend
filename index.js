import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./libs/db.js";
import chatRouter from "./routes/chat.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

connectDb();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth/', authRouter);
// app.use('/chat', chatRouter);

const port = process.env.PORT;

app.listen(port, () => {
    console.info('Server is running on port ' + port);
});