import categoryModel from "../models/categoryModels.js"

//getall
export async function getAll(req, res, next){
    categoryModel.find({}, (err, response) =>{
    if (err) return next(err);
    res.status(200).send({ success: true, response})     
    })
}


//create
export async function createcategory(req, res,next){
    try{
    const Category= new categoryModel(req.body)
    Category.save((error, response) => {
        if (error) return res.status(500).send(error);
        res
          .status(200)
          .send({ success: true, message: "Category Added Succesfully" });
      });
    } catch (e) {
      return res.status(500).send(e);
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
export async function getupdatecategory(req, res, next){
    let { id } = req.params
    const newCategory=req.body
    categoryModel.findByIdAndUpdate({ _id:id},newCategory ,(err, response) =>{
    if (err) return next(err);
    res.status(200).send({ success: true, response})     
    })
}


//delete
export function deletecategory(req, res, next){
    let { id } = req.params
    categoryModel.findOneAndDelete({ _id:id}, (err) =>{
    if (err) return next(err);
    res.status(200).send({ success: true, message:'Category deleted'})     
    })
}


const categoryController = {getAll, createcategory, getcategory, getupdatecategory, deletecategory}
export default categoryController