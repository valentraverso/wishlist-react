const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    "title_task": {
        type: String,
        required: true
    },
    "completed_task": Boolean
})

const taskModel = mongoose.model("tasks", taskSchema);


module.exports = taskModel;