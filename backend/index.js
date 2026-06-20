import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/db.js';
import cookieParser from 'cookie-parser';
import authRoute from './routes/authRoute.js'
import websiteRoute from './routes/websiteRoute.js'
import cors from 'cors';

dotenv.config();

const app = express();

const PORT = process.env.PORT;

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));

//routes
app.use("/api/auth", authRoute);
app.use("/api/website", websiteRoute);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});