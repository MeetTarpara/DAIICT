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

  export const addExport = async (req, res ,next) => {
    try {
      // Create a new instance of the PowerSubscription model with the request body
      const newSubsidy = new export_model(req.body);
      
      // Save the new subscription to the database
      const savedSubsidy = await newSubsidy.save();
      
      // Respond with the created subscription
      res.status(201).json(savedSubsidy);
    } catch (error) {
      
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


