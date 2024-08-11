import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    community_id : {
        type : String,
        required : true
    },

    chat_message : [{
        message : {
            type : String
        },
        sender : {
            type : String
        }
    }]
})

const chat = mongoose.model("chat" , chatSchema);
export default chat;