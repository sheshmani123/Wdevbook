import mongoose from "mongoose";


 export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://sheshmanir21becs:sheshmani123456@cluster0.l9zt62l.mongodb.net/Food-ordering').then(()=>{console.log("mongoose is connected successfullly..")})
}
