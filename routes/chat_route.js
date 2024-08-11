import express from 'express';
import { addChat, editChat, getAllChat, getChatByID } from '../controllers/chat_controller.js';

const route = express.Router();

route.get("/" , getAllChat);
route.get("/:id" , getChatByID);
route.post("/" , addChat);
route.put("/:id",editChat)

export default route;