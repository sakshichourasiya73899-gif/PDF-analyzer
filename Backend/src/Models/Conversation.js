import mongoose from 'mongoose';

const mongooseSchema = new mongoose.Schema({
    role:{
        type:String,
        enum:["user","assistant"],
        message:"Role must be either 'user' or 'assistant'",
        required:true
    },
    content:{
        type:String,
        trim:true,
        required:true,
        minlength:[1,"Content must be at least 1 character long"]
    },
  },{
        timestamps:true
    });

 const consersationSchema = new mongoose.Schema({
    docummentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Document",
        required:true,
        index:true
    },
    title:{
        type:string,
        default:"New Chat",
        trim:true,
        required:true,
        maxlength:[100,"Title must be less than 100 characters"]
    },
    //Memory Layer -summary of older messages to keep context without hitting token limits
    summary:{
        type:String,
        default:"",
        maxlength:[3000,"Summary must be less than 3000 characters"]

    },
    //how many messages have been summarized so far
    summarizeUpTo:{
        type:Number,
        default:0
    },
    messages:{
        type:[messageSchema],
        default:[],
    }
 },
{
    timestamps:true
});
export default mongoose.model("Conversation",consersationSchema);   