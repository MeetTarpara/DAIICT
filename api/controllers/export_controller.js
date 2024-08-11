import export_model from '../models/export_model.js';
// import bcrypt from 'bcryptjs';
// import { errorHandler } from "../utils/error.js";


export const getAllDetails = async (req, res,next) => {
    try {
      const data = await export_model.find();
      res.json(data);
    } catch (error) {
       
      next(error);
    }
  }

  export const getExport =  async (req, res,next) => {
    try {
      const data = await export_model.findById(req.params.id);
      if (!data) {
        return res.status(404).json({ message: 'Power subscription not found' });
      }
      res.json(data);
    } catch (error) {
      
      next(error);
    }
  };

  export const addExport = async (req, res, next) => {
    try {
        console.log("Request Body: ", req.body);

        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ error: "Request body is empty" });
        }

        const newSubsidy = new export_model(req.body);
        console.log("New Subsidy:", newSubsidy);

        const savedSubsidy = await newSubsidy.save();
        console.log("Saved Subsidy:", savedSubsidy);

        if (!savedSubsidy) {
            throw new Error("Failed to save subsidy");
        }

        return res.status(201).json(savedSubsidy);
    } catch (error) {
        console.error("Error:", error);
        next(error);
    }
};

  export const updateExport =  async (req, res,next) => {
    try {
      const updatedSubsidy = await export_model.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!updatedSubsidy) {
        return res.status(404).json({ message: 'Power subscription not found' });
      }
      res.json(updatedSubsidy);
    } catch (error) {
        next(error);
      }
  };

  export const deleteExport = async (req, res,next) => {
    try {
      const deletedSubscription = await export_model.findByIdAndDelete(req.params.id);
      if (!deletedSubscription) {
        return res.status(404).json({ message: 'Power subscription not found' });
      }
      res.json({ message: 'Power subscription deleted successfully' });
    } catch (error) {
        next(error);
      }
  };


