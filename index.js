import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import projectRoutes from './routes/projectRoutes';
import adminRoutes from './routes/adminRoutes.js';
import bodyParser from 'body-parser';
import cors from 'cors';


import categoryRoutes from './routes/categoryRoutes';

dotenv.config();

const port = process.env.PORT || 5000;

const app = new express();

connectDB();
app.use(express.urlencoded({extended:false}))  //for url encoded 

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use(cors());


if (process.env.NODE_ENV === "development"){
    app.use(morgan('dev'));
}

app.use('/api/project',projectRoutes)
app.use('/api/admin',adminRoutes)
app.use('/api/category',categoryRoutes)



app.listen(port,()=>console.log(`Server started on port ${port}`));