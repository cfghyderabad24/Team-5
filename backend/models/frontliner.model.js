import mongoose from 'mongoose';

const frontlinerSchema = new mongoose.Schema({
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
    doc_uploaded: {
        type: [File],
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