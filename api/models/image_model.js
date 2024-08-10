import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    imageurl: {
        type: String
    },
    imageResponse: {
        type: String
    }
},
    { timestamps: true }
)

export const Image = mongoose.model("Image", imageSchema)
