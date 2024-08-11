import mongoose from "mongoose";

const subsidySchema = new mongoose.Schema({
    subsidyType: {
        type: String
    },
},
    { timestamps: true }
)

export const Farmer = mongoose.model("Farmer", farmerSchema)


// subsidyType:
/*
    1] Agriculture Support Schemes
        -AGR2
        -AGR3
        -Agricultural Skill Development Training Programme for Women Farmers and Farmers 

    2] Horticultural aid schemes

*/