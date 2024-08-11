import mongoose from "mongoose";

const fertilizerSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  FarmerID: {
    type: String,
    required: true
  },
  AadhaarNumber: {
    type: String,
    required: true
  },
  BankAccountNumber: {
    type: String,
    required: true
  },
  IsAadhaarLinkedToBank: {
    type: Boolean,
    required: true
  },
  OwnsOrLeasesLand: {
    type: Boolean,
    required: true
  },
  LandAreaInAcres: {
    type: Number,
    required: true
  },
  IsSmallOrMarginalFarmer: {
    type: Boolean,
    required: true
  },
  FertilizerType: {
    type: String,
    required: true
  },
  IsUrea: {
    type: Boolean,
    required: true
  },
  Nitrogen: {
    type: Boolean,
    required: true
  },
  Phosphorus: {
    type: Boolean,
    required: true
  },
  Potassium: {
    type: Boolean,
    required: true
  },
  Sulfur: {
    type: Boolean,
    required: true
  },
  QuantityInKilograms: {
    type: Number,
    required: true
  },
  FollowsGovernmentGuidelines: {
    type: Boolean,
    required: true
  },
  FollowsEnvironmentalPractices: {
    type: Boolean,
    required: true
  }
});

export default mongoose.model('FertilizerSubsidy', fertilizerSchema);
