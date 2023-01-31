import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const categorySchema = new Schema({ 
    
    description : {
        type : String,
       // enum: ['front-end', 'back-end', 'full-stuck'],
        required : true 
    }
    
},
{
    colletion:"categories"}
);

const category = model("category", categorySchema);
export default category;
