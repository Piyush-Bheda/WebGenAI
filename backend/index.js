import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/db.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});