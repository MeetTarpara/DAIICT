import mongoose from "mongoose";

const communitySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    description : {
        type : String,
    }
})

const community = mongoose.model("community" , communitySchema);

export default community;