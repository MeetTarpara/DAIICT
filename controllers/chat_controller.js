import Chat from "../models/chat_model.js";
import { errorHandler } from "../utils/error.js";

export const getAllChat = async (req , res , next) => {
    try {
        const chats = await Chat.find();
        if(chats){
            res.status(200).json(chats);
        }
        else{
            next(errorHandler(404 , "User not found!!!"));
        }
    }

    catch(error){
        next(error);
    }
}

export const getChatByID = async (req , res , next) => {
    try {
        const id = req.params.id;
        console.log(id);
        const chats = await Chat.findOne({community_id : id});
        if(chats){
            res.status(200).json(chats);
        }
        else{
            next(errorHandler(404 , "User not found!!!"));
        }
    }
    catch(error){
        next(error);
    }
}

export const addChat = async (req , res , next) => {
    try{
        const chat = new Chat(req.body);
        await chat.save();
        if(chat){
            res.status(200).json(chat);
        }
        else{
            next(errorHandler(404 , "User not found!!!"));
        }
    }
    catch(error){
        next(error);
    }
}

export const editChat = async (req, res, next) => {
    try{
        const id = req.params.id;
        
        const chat = await Chat.findByIdAndUpdate(id, req.body, {new : true});
        if(chat){
            res.status(200).json(chat);
        }
        else{
            next(errorHandler(404 , "User not found!!!" + chat));
        }

    }
    catch(error){
        next(error);
    }
}