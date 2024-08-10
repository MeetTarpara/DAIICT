import mongoose from 'mongoose';

const exportSchema = new mongoose.Schema({
    FarmerID: {
      type: String,
      required: true
    },
    FarmerName: {
      type: String,
      required: true
    },
    AadhaarNumber: {
      type: String,
      required: true
    },
    LandLocation: {
      type: String,
      required: true
    },
    CropType: {
      type: String,
      required: true
    },
    SubsidyAmount: {
      type: Number,
      required: true
    },
    ExportDate: {
      type: Date,
      required: true
    },
    ApprovalStatus: {
      type: String,
      required: true
    }
  });
  
  export default mongoose.model('ExportSubsidy', exportSchema);
  
