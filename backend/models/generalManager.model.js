import mongoose from 'mongoose';

const generalManagerSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    reminders:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reminder',
        required: true
    }
})
const GeneralManager = mongoose.model('generalManager', generalManagerSchema);
export default GeneralManager;