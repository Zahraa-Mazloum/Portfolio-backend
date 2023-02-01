import express from 'express';
import {loginAdmin,registerAdmin, getMe,protect,logoutAdmin,forgotPassword,resetPassword,changePassword} from '../controllers/adminController.js';
//import {protect} from '../middleware/authMiddleware.js'


export const router = express.Router()

router.post('/',registerAdmin)
router.post('/login',loginAdmin)
router.get('/me',protect,getMe)
router.post('/logout',protect,logoutAdmin)
router.post('/forgotPassword',forgotPassword)
router.get('/resetPassword/:id/:token',resetPassword)
router.put('/resetPassword/:id/:token',changePassword)

export default router;


