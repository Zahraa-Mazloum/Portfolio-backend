import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
email:{
    type:String,
    required:[true,'please add an email'],
    unique:true,
    trim:true,
},
password:{ 
    type:String,
    required:[true,'please add a password'],
    minlength:5
},

},

{ timestamps:true 

},{
collection:"Admins"
}
);



export default mongoose.model('Admin', adminSchema);

