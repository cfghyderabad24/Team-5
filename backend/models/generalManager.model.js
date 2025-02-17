import mongoose from 'mongoose';

const generalManagerSchema = new mongoose.Schema({
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
    phoneNo: {
        type: String,
        required: true
    },
    reminders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Reminder',
            default: []
        }
    ]
    ,
    projects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project',
            default: []
        }
    ]
})
const GeneralManager = mongoose.model('generalManager', generalManagerSchema);
export default GeneralManager;