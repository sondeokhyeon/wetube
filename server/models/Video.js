import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    fileURL: {
        type: String,
        required: 'File URL is required'
    },
    title: {
        type: String,
        required: "title is required"
    },
    description: String,
    views: {
        type: Number,
        default: 0
    },
    creatAt: {
        type: Date,
        default: Date.now
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
});

const model = mongoose.model("Video", VideoSchema);
export default model;