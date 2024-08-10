import seed_model from '../models/seed_model.js';
import bcrypt from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';


export const getAllDetails = async (req, res,next) => {
    try {
      const data = await seed_model.find();
      res.json(data);
    } catch (error) {
       
      next(error);
    }
  }


export const getSeed =  async (req, res,next) => {
    try {
      const data = await seed_model.findById(req.params.id);
      if (!data) {
        return res.status(404).json({ message: 'Power subscription not found' });
      }
      res.json(data);
    } catch (error) {
      
      next(error);
    }
  };

export const addSeed = async (req, res ,next) => {
    try {
      // Create a new instance of the PowerSubscription model with the request body
      const newSubsidy = new seed_model(req.body);
      
      // Save the new subscription to the database
      const savedSubsidy = await newSubsidy.save();
      
      // Respond with the created subscription
      res.status(201).json(savedSubsidy);
    } catch (error) {
      
        next(error);
      }
  };

export const updateSeed =  async (req, res,next) => {
    try {
      const updatedSubsidy = await seed_model.findByIdAndUpdate(
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

export const deleteSeed = async (req, res,next) => {
    try {
      const deletedSubscription = await seed_model.findByIdAndDelete(req.params.id);
      if (!deletedSubscription) {
        return res.status(404).json({ message: 'Power subscription not found' });
      }
      res.json({ message: 'Power subscription deleted successfully' });
    } catch (error) {
        next(error);
      }
  }; 