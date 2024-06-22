import mongoose from "mongoose";

const seniorManagerSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
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