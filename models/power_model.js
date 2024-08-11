import mongoose from 'mongoose';

const powerSchema = new mongoose.Schema({
  farmerID:{
    type: String,  // Unique ID of the farmer
    required: true,
    unique: true,
  },
  
  electricity_connection_number: {
    type: String,  // Connection number provided by the utility
    required: true
  },
  connection_type: {
    type: String,  // Type of connection
    required: true
  },
  connection_load: {
    type: Number,  // Load capacity (in kW)
    required: true
  },
  meter_number: {
    type: String,  // Unique number of the electricity meter
    required: true
  },
  subsidy_type_applied_for: {
    type: String,  // Type of subsidy applied for
    required: true
  },
  previous_subsidy_availed: {
    type: Boolean,  // Yes/No if previous subsidy was availed
    required: true
  },
  previous_subsidy_details: {
    type: String  // Details if previous subsidy was availed
  }
});

export default mongoose.model('PowerSubsidy', powerSchema);