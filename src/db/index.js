import mongoose from "mongoose";

const connectDB = async (url)=>{
    try {
        const connectionInstance = await mongoose.connect(url);
        console.log(`\n MongoDb connected. !DB hosted : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(`DB connection error!!! : ${error}`)
        process.exit(1);
    }
}

export default connectDB;