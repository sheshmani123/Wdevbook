import mongoose from "mongoose"
import { type } from "os"
const orderSchema =new mongoose.Schema({
    userId:{type:String,required:true},
    items:{type:Array,required:true},
    amount:{type:Number ,required:true},
    address:{type:Object,required:true},
    status:{type:String,default:"Food Processing"},
    date:{type:Date,default:Date.now()},
    payment:{type:Boolean,default:false}
})
const orderModel=mongoose.model.MyOrders || mongoose.model("MyOrders",orderSchema);
export default orderModel;

