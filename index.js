import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import projectRoutes from './routes/projectRoutes.js';
import adminRoutes from './routes/adminRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
dotenv.config();
const port = process.env.PORT || 5000;
await connectDB();
const app = new express();
app.use(express.urlencoded({extended:false}))  //for url encoded 
app.use(express.json());
app.use(cors());
app.use(cookieParser())

if (process.env.NODE_ENV === "development"){
    app.use(morgan('dev'));
}
app.use("/uploads",express.static("uploads"))
app.use('/api/project',projectRoutes)
app.use('/api/admin',adminRoutes)
app.use('/api/category',categoryRoutes)



app.listen(port,()=>console.log(`Server started on port ${port}`));
