import express from 'express';
import { deleteUser, test, updateUser } from '../controllers/user_controller.js';
import { verifyToken } from '../utils/verifyUser.js';
import { addPower, deletePower, getAllDetails, getPower, updatePower } from '../controllers/power_controller.js';


const router = express.Router();

router.get('/',getAllDetails)
router.get('/:id', getPower)
router.post('/add',addPower)
router.put('/update/:id', updatePower)
router.delete('/delete/:id', deletePower)
// router.get('/post',test)


// router.post('/update/:id', verifyToken, updateUser)
// router.delete('/delete/:id', verifyToken, deleteUser)


export default router;