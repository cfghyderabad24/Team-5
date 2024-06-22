import mongoose from 'mongoose';

const frontlinerSchema = new mongoose.Schema({
    name: {
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
        default: 'frontliner'
    },
    phoneNo:{
        type:String,
        required:true
    },
    projects: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project'
        }],
        default: []
    },
    doc_uploaded: {
        type: [String],
        default: []
    },
    reminders: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Reminder'
        }],
        default: []
    },
})
const Frontliner = mongoose.model('Frontliner', frontlinerSchema);
export default Frontliner;