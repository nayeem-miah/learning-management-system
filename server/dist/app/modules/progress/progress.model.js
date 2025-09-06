"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Progress = void 0;
const mongoose_1 = require("mongoose");
const progressSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    courseId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Course",
        required: true
    },
    completedLectures: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Lecture"
        }
    ],
    unlockedLectures: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Lecture"
        }
    ],
}, { timestamps: true });
exports.Progress = (0, mongoose_1.model)("Progress", progressSchema);
