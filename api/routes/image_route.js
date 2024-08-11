import express from 'express';
import { google, signin, signOut, signup, test1 } from '../controllers/auth_controller.js';
import { sendPutRequest, sendRequest } from "../controllers/image_controller.js"
const router = express.Router();


// router.post("/signin",signin);
router.post('/putimage', async(req,res) => {
    try {
        const result1 = await sendPutRequest(req.files.avatar[0].path);
        console.log(result1)
        // const result = await sendRequest();
        res.status(200).json({
            success: true,
            data: result.json(),
            message: "Image processed successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error processing image",
            error: error.message,
        });
    }
})

router.get('/getimage', async(req,res) => {
    try {
        // const result1 = await sendPutRequest();
        const result = await sendRequest();
        res.status(200).json({
            success: true,
            data: result.json(),
            message: "Image processed successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error processing image",
            error: error.message,
        });
    }
})


export default router;