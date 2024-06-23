import mongoose from 'mongoose';

const dueDateSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: null
    },
    status: {
        type: String,
        enum: ['None', 'Fulfilled', 'Pending'],
        default: 'None'
    }
});

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    sanctionedAmount: {
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
        default: 'None' // Default status
    },
    cycle: {
        type: String,
        enum: ['Jan', 'July'],
        required: true
    },
    dueDates: {
        annualReviewVisit: {
            type: dueDateSchema,
            default: {}
        },
        aerSubmission: {
            type: dueDateSchema,
            default: {}
        },
        disbursalDate: {
            type: dueDateSchema,
            default: {}
        },
        monitoringEvaluationVisit: {
            type: dueDateSchema,
            default: {}
        },
        drsSubmissionApproval: {
            type: dueDateSchema,
            default: {}
        },
        drsSubmissionFinance: {
            type: dueDateSchema,
            default: {}
        }
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Frontliner'
    },
    sm_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SeniorManager'
    }
});

const Project = mongoose.model('Project', projectSchema);
export default Project;
