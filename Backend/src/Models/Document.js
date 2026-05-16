import mongoose from "mongoose";
const doccumentSchema = new mongoose.Schema({
    filename:{
        type:String,
        required:true,
        trim:true
    },
    originalName:{
        type:String,
        required:true
    },
    totalChunks:{
        type:Number,
        required:true,
        default:min(1)
        
    },
    namespace:{
        type:String,
        required:true ,
        unique:true
    }, //used as vectorStore collection name
    
},{timestamps:true}
);

export default mongoose.model("Doccument",doccumentSchema);