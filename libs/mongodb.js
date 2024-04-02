import mongoose from "mongoose"

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected to Mongodb")
        } catch (error){
            console.log("error connecting", error) 
        }
};

export default connectMongoDB; 