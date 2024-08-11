import mongoose from "mongoose";

const farmerSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "Farmer"
    },
    income: {
        type: int,
    },
    farmSize: {
        type: int,
    },
    farmLocation: { 
        type: [String] 
    },
    soilType: {
        type: String,
    },
    preferred_crops: {
        type: [String] 
    },
},
    { timestamps: true }
)

export const Farmer = mongoose.model("Farmer", farmerSchema)