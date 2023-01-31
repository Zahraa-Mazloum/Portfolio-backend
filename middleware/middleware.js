// import multer from "multer";
// import fs from "fs";
// import project from "../models/projectModel.js"


// const storage = multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, "uploads/");
//   },
//   filename: function (req, file, callback) {
//     callback(null, file.fieldname+"-"+Date.now()+"."+file.mimetype.split("/")[1]);
//   },
// });
// const upload = multer({ storage });
// export default function (req, res, next) {
//   upload.single("images")(req, res, (err) => {
//     if (err) {
//       return next(err);
//     }
//     req.imagePath = req.file.path;
//     next();
//   });
// }

// export async function deleteImage(req,res,next){
//   let { id }= req.params;
//   try{
//     let image = await project.findById(id);
//     fs.unlinkSync(image.image);
//     next();
//   }catch(err){
//     return res.status(404).send({status: 404, message:"image not found"})
//   }
// }




import multer from "multer";
// import fs from "fs";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(
      null,
      `${file.originalname.split(".")[0]}.${file.mimetype.split("/")[1]}`
    );
  },
});

const upload = multer({ storage: storage });

export function uploadImage(req, res, next) {
  upload.single("image")(req, res, (err) => {
    if (err) {
      return next(err);
    }
    req.body.image = req.file.path;
    next();
  });
}
export function updateImage(req, res, next) {
  upload.single("image")(req, res, (err) => {
    if (err) {
      return next(err);
    }
    req.image = req.file.path;
    next();
  });
}
const image = {
  uploadImage,
  updateImage
}

export default image