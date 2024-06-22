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
            date: Date,
            content: String,
            status: {
                type: String,
                enum: ['Pending', 'Completed'],
                default: 'Pending'
            }
        }],
        default: []
    },
})
export default mongoose.model('frontliner', frontlinerSchema);