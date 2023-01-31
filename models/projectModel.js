import mongoose from "mongoose";
const {Schema, model} = mongoose;


const projectSchema = new Schema({
        title: {
            type: String,
           required: [true, "Please enter project name"]
        },
        description: {
            type: String,
            required: [true, "Please enter project description"]
        },
        link: {
            type: String,
            required: [true, "Please enter project link"]
        },
        image:{
            type: String,
        }
     
    }, {
        collection: 'projects'
    });

const Project = model('Project',projectSchema);
export default Project;