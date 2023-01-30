import categoryModel from "../models/categoryModels.js"

//getall
export function getAll(req, res, next){
    categoryModel.find({}, (err, response) =>{
    if (err) return next(err);
    res.status(200).send({ success: true, response})     
    })
}


//create
export async function createcategory(req, res,next){
const Category= await categoryModel(req.body)
try{
    Category.save();
    const savedCategory = Category;
    return res.status(200).json({data:savedCategory})
}catch(err){
    res.status(400).send({message:err})
}
  }


//get
export function getcategory(req, res,next){
    let { id } = req.params
    categoryModel.findOne({ _id:id}, (err, response) =>{
    if (err) return next(err);
    res.status(200).send({ success: true, response})     
    })
}


//update
export function getupdatecategory(req, res, next){
    let { id } = req.params
    categoryModel.findOne({ _id:id}, (err, response) =>{
    if (err) return next(err);
    res.status(200).send({ success: true, response})     
    })
}


//delete
export function deletecategory(req, res, next){
    let { id } = req.params
    categoryModel.findOne({ _id:id}, (err, response) =>{
    if (err) return next(err);
    res.status(200).send({ success: true, response})     
    })
}


const categoryController = {getAll, createcategory, getcategory, getupdatecategory, deletecategory}
export default categoryController