import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/db.js';
import cookieParser from 'cookie-parser';
import authRoute from './routes/authRoute.js'

dotenv.config();

const app = express();

const PORT = process.env.PORT;

//middlewares
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});