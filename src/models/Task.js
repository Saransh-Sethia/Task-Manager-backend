const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    priority:{
        type: String,
        required: true,
        enum: ["Low","Medium","High"],
        default:"Low",
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
},
{
    timestamps: true
}
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;