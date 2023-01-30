import express from 'express'
import categorycontroller from '../controllers/categoryController.js';

export const router =express.Router() 

router.get('/', categorycontroller.getAll)

router.post('/', categorycontroller.createcategory)

router.get('/:id', categorycontroller.getcategory)

router.put('/:id', categorycontroller.getupdatecategory)

router.delete('/:id', categorycontroller.deletecategory)

export default router;

