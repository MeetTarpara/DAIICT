import express from 'express';
// import { deleteUser, test, updateUser } from '../controllers/user_controller.js';
// import { verifyToken } from '../utils/verifyUser.js';
import { addExport, deleteExport, getExport, updateExport ,getAllDetails} from '../controllers/export_controller.js';


const router = express.Router();

router.get('/',getAllDetails)
router.get('/:id', getExport)
router.post('/add',addExport)
router.put('/update/:id', updateExport)
router.delete('/delete/:id', deleteExport)

export default router;