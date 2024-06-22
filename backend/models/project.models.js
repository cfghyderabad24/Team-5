import mongoose from mongoose;

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    dept: {
        type: String,
        enum: ['Education', 'Health', 'Agriculture', 'Infrastructure', 'Others'],
        required: true
    },
    status: {
        type: String,
        enum: ['Field Visit', 'Upload Documents', 'Documents Uploaded', 'Sanctioned', 'Completed', 'Rejected'],
        required: true
    },
    cycle: {
        type: String,
        enum: ['Jan', 'July'],
        required: true
    },
    sanctioned: {
        type: [{
            amount: Number,
            date: Date
        }],
        required: true
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    sm_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
})

const Project = mongoose.model('Project', projectSchema);
export default Project;