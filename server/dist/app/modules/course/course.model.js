"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
const mongoose_1 = require("mongoose");
const courseSchema = new mongoose_1.Schema({
    thumbnail: {
        type: String,
        required: [true, "thumbnail link must be required"]
    },
    title: {
        type: String,
        required: [true, "title must be required"],
        trim: true,
        min: [3, "title must me 3 character"]
    },
    price: {
        type: Number,
        required: [true, "course price must be required"],
        min: 0
    },
    description: { type: String, required: true },
}, {
    timestamps: true
});
exports.Course = (0, mongoose_1.model)("Course", courseSchema);
