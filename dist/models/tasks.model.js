"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TasksSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        lowercase: true,
    },
    description: {
        type: String,
        required: true,
        lowercase: true,
    },
});
exports.default = mongoose_1.model('Task', TasksSchema);
