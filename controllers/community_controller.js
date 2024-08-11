import Community from "../models/community_model.js";
import { errorHandler } from "../utils/error.js";

export const getAllCommunity = async ( req , res , next) => {
    try {
        const community = await Community.find();
        if(community){
            res.status(200).json(community);
        }
        else{
            next(errorHandler(404 , "Users Not Found !!!!"))
        }
    }
    catch(error){
        next(error);
    }
}

export const getCommunityByID = async (req , res , next) => {
    try {
        // console.log(req.params.id)
        const community = await Community.findById(req.params.id);
        
        if(community){
            res.status(200).json(community);
        }
        else{
            next(errorHandler(404 , "Community Not Found !!!!"))
        }
    }
    catch(error){
        next(error);
    }
}
export const addCommunity = async ( req , res , next ) => {
    try{
        const community = new Community(req.body);
        console.log(community);
        await community.save();
        if(community){
            res.status(200).json(community);
        }
        else{
            next(errorHandler(404 , "USER NOT ADD !!!"))
        }
    }
    catch(error){
        next(error);
    }
}

export const editCommunity = async ( req , res , next ) => {
    try{
        const community = await Community.findByIdAndUpdate(req.params.id , req.body , {new : true});
        if(community){
            res.status(200).json(community);
        }
    }
    catch(error){
        next(error);
    }
}

