import mongoose from "mongoose";
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    role: {
        type: String,
        enum: ["Frontliner","seniorManager","generalManager"]
    },
    phoneNo:{
        type:String,
        required:true
    }
});
 const User=mongoose.model('User', userSchema);
 export default User;