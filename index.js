import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import project from './routes/projectRoutes.js';
import multer from "multer";
// import fileUpload from "express-fileupload"
// import adminRoutes from './routes/adminRoutes'
// import categoryRoutes from './routes/categoryRoutes';

dotenv.config();

const port = process.env.PORT || 5000;


await connectDB();
// for url encoded 


const app = new express();
app.use(express.json());
app.use(express.urlencoded({extended:false})) 

if (process.env.NODE_ENV === "development"){
    app.use(morgan('dev'));
}
// app.use(express.urlencoded())
app.use("/uploads",express.static("uploads"))

app.use('/api/project',project)
// app.use('/api/admin',adminRoutes)
// app.use('/api/category',categoryRoutes)



app.listen(port,()=>console.log(`Server started on port ${port}`));