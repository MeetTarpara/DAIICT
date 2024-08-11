import mongoose from "mongoose";

const seedSchema = new mongoose.Schema(
  {
    farmer_id: {
      type: String,  // Correct type for Mongoose schema
      required: true
    },
    seed_type: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,  // Correct type for Mongoose schema
      required: true
    },
    subsidy_amount: {
      type: Number,
      required: true
    }
  }
);

export default mongoose.model('SeedSubsidy', seedSchema);