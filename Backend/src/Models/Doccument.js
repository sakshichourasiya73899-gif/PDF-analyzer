import mongoose from "mongoose";
const doccumentSchema = new mongoose.Schema({
    filename:{
        type:String,
        required:true
    },
    originalName:{
        type:String,
        required:true
    },
    totalChunks:{
        type:Number,
        required:true
    },
    namespace:{
        type:String,
        required:true 
    }, //used as vectorStore collection name
    
},{timestamps:true}
);

export default mongoose.model("Doccument",doccumentSchema);