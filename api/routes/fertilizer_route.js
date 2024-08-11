import express from 'express';
import { addFertilizer, deleteFertilizer, getAllDetails, getFertilizer, updateFertilizer } from '../controllers/fertilizer_controller.js';
// import { deleteUser, test, updateUser } from '../controllers/user_controller.js';
// import { verifyToken } from '../utils/verifyUser.js';
// import { addExport, deleteExport, getExport, updateExport ,getAllDetails} from '../controllers/export_controller.js';


const router = express.Router();

router.get('/',getAllDetails)
router.get('/:id', getFertilizer)
router.post('/add',addFertilizer)
router.put('/update/:id', updateFertilizer)
router.delete('/delete/:id', deleteFertilizer)

export default router;