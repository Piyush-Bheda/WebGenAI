import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const connectDB = () => {
    try {
        mongoose.connect(MONGO_URI)
        console.log(`Database connected successfully`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

export default connectDB;