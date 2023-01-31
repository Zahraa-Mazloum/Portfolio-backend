import projectModel from "../models/projectModel.js";
// import middleware, { deleteImage } from "../middleware/middleware.js";
import fs from 'fs'

//get all the projects
export async function getAll(req, res, next) {
    projectModel.find({}, (err, response) => {
      if (err) return next(err);
      return res.status(200).send({ success: true, response });
    });
  }
  
  //get the Project by id
  export async function getByID(req, res, next) {
    let { id } = req.params;
    projectModel.findOne({ _id: id }, (err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  }
  
  //create a Project
  // const  post = async(req, res, next)=> {
    
  //   try {
  //     const newProject =  new projectModel({
  //       title:req.body.title,
  //       description:req.body.description,
  //       image:req.imagePath,
  //       link:req.body.link
  //   })
  //     await newProject.save();
  //     console.log("hello")
  //     res.status(200).send(newProject)
      
  //   } catch (err) {
  //     return res.status(403).send({ status: 403, err });
  //   }
  // }

  export async function post(req, res, next) {
    try {
      let body = req.body;
      let newproduct = new projectModel(body);
      newproduct.save((error, response) => {
        if (error) return res.status(500).send(error);
        res
          .status(200)
          .send({ success: true, message: "project Added Succesfully" });
      });
    } catch (e) {
      return res.status(500).send(e);
    }
  }

  //update the Project
  export async function updateProject(req, res, next) {
      const id = req.params.id;
      const newProduct = req.body;
      console.log(req.body)
      projectModel.findByIdAndUpdate(id, newProduct, {
        new: true,
        runValidators: true,
      })
        .then((update) => {
          if (update) {
            res.status(200).send(update);
          } else {
            res.status(404).send("Not Found");
          }
        })
        .catch((err) => {
          res.status(500).send(err.message);
        });
    }

  
    export function put(req, res, next) {
      let body = req.body;
      let data = {};
      let id = req.params.id;
      if ("name" in body) data.name = body.name;
      if ("description" in body) data.description = body.description;
      if ("link" in body) data.link = body.link;
      data.image = req.image;
      try {
        projectModel.findOne({ _id: id }, (err, project) => {
          if (err) return next(err);
          fs.unlink(project.image, (err) => {
            if (err) return next(err);
            project.image = req.image;
            project.save((err, updateProject) => {
              if (err) return next(err);
              res.status(201).send({ success: true, updateProject });
            });
          });
        });
      } catch (err) {
        res.status(err.status).send(err.message);
      }
    }
  
  


 

  //delete the project
  export async function deleteProject(req, res, next) {
    const { id } = req.params;
  
    projectModel.findOneAndDelete({ _id: id })
      .then((response) => {
        if (!response) {
          res.status(404).send({ status: 404, message: "Not Found" });
        } else {
          fs.unlinkSync(response.image);
          res.status(200).send({ status: 200, message: "deleted successfully" });
        }
      })
      .catch((error) => {
        res.status(500).send({ status: 500, message: error.message });
      });
  }
  const projectController = {post , getAll, deleteProject, getByID, put,updateProject };
  export default projectController;

