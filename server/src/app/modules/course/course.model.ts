import { model, Schema } from "mongoose";
import { ICourse } from "./course.interface";

const courseSchema = new Schema<ICourse>({
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

export const Course = model<ICourse>("Course", courseSchema);