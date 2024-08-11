import express from 'express';
import { addCommunity, editCommunity, getAllCommunity, getCommunityByID } from '../controllers/community_controller.js';
// import { updateCommunityList } from '../../client/redux/user/userSlice.js';

const route = express.Router();

route.get("/",getAllCommunity);
route.get("/:id" , getCommunityByID)
route.post("/",addCommunity);
route.put("/:id" , editCommunity)
export default route;