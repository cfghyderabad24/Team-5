import mongoose from "mongoose";

const reminderSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Completed'],
        default: 'Pending'
    },
    toSendDate: {
        type: Date,
        required: true
    },
})

const Reminder = mongoose.model('Reminder', reminderSchema);
export default Reminder;