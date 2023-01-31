import express from "express";
const router = express.Router();
import projectController from "../controllers/projectController.js";
import image from "../middleware/middleware.js"


router.get('/', projectController.getAll);
router.get('/:id',projectController.getByID);
router.post('/',image.uploadImage,projectController.post);
router.put('/:id',projectController.updateProject);
router.put('/image/:id',image.updateImage,projectController.put)
router.delete('/:id',projectController.deleteProject);

export default router;