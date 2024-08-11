import power_model from '../models/power_model.js';
import bcrypt from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';


export const getAllDetails = async (req, res,next) => {
    try {
      const data = await power_model.find();
      res.json(data);
    } catch (error) {
       
      next(error);
    }
  }


export const getPower =  async (req, res,next) => {
    try {
      const data = await power_model.findById(req.params.id);
      if (!data) {
        return res.status(404).json({ message: 'Power subscription not found' });
      }
      res.json(data);
    } catch (error) {
      
      next(error);
    }
  };

export const addPower = async (req, res ,next) => {
    try {
      // Create a new instance of the PowerSubscription model with the request body
      const newSubsidy = new power_model(req.body);
      
      // Save the new subscription to the database
      const savedSubsidy = await newSubsidy.save();
      
      // Respond with the created subscription
      res.status(201).json(savedSubsidy);
    } catch (error) {
      
        next(error);
      }
  };

export const updatePower =  async (req, res,next) => {
    try {
      const updatedSubsidy = await power_model.findByIdAndUpdate(
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

export const deletePower = async (req, res,next) => {
    try {
      const deletedSubscription = await power_model.findByIdAndDelete(req.params.id);
      if (!deletedSubscription) {
        return res.status(404).json({ message: 'Power subscription not found' });
      }
      res.json({ message: 'Power subscription deleted successfully' });
    } catch (error) {
        next(error);
      }
  };