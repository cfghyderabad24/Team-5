import mongoose from "mongoose";

const seniorManagerSchema = new mongoose.Schema({
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
        default: 'general manager'
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
    reminders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Reminder'
        }
    ],
    frontliners: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Frontliner'
        }],
        default: []
    },
    generalManager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const SeniorManager = mongoose.model('SeniorManager', seniorManagerSchema);
export default SeniorManager;