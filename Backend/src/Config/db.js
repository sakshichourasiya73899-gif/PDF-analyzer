import mongoose from "mongoose";
import dns from 'dns';

dns.setServers(["8.8.8.8", "8.8.4.4"]);
dns.setDefaultResultOrder("ipv4first");

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { family: 4 });
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
}

export default connectDb;