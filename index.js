import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
//import projectRoutes from './routes/projectRoutes';
//import adminRoutes from './routes/adminRoutes'
import categoryRoutes from './routes/categoryRoutes.js';

dotenv.config();

await connectDB();

const port = process.env.PORT;
const app = new express();

await connectDB();
app.use(express.urlencoded({extended:false}))  //for url encoded 



app.use(express.json());

if (process.env.NODE_ENV === "development"){
    app.use(morgan('dev'));
}

//app.use('/api/project',projectRoutes)
//app.use('/api/admin',adminRoutes)
app.use('/api/category',categoryRoutes)



app.listen(port,()=>console.log(`Server started on port ${port}`));