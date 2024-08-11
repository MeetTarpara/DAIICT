import express from 'express';
import { deleteUser, test, updateUser } from '../controllers/user_controller.js';
import { verifyToken } from '../utils/verifyUser.js';
import { addSeed, deleteSeed, getAllDetails, getSeed, updateSeed } from '../controllers/seed_controller.js';
// import { addPower, deletePower, getAllDetails, getPower, updatePower } from '../controllers/power_controller.js';


const router = express.Router();

router.get('/',getAllDetails)
router.get('/:id', getSeed)
router.post('/add',addSeed)
router.put('/update/:id', updateSeed)
router.delete('/delete/:id', deleteSeed)
// router.get('/post',test)


// router.post('/update/:id', verifyToken, updateUser)
// router.delete('/delete/:id', verifyToken, deleteUser)


export default router;