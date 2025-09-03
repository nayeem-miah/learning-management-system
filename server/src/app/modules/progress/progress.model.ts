import { model, Schema } from "mongoose";
import { IProgress } from "./progress.interface";

const progressSchema = new Schema<IProgress>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        courseId: {
            type: Schema.Types.ObjectId,
            ref: "Course",
            required: true
        },
        completedLectures: [
            {
                type: Schema.Types.ObjectId,
                ref: "Lecture"
            }
        ],
        unlockedLectures: [
            {
                type: Schema.Types.ObjectId,
                ref: "Lecture"
            }
        ],
    },
    { timestamps: true }
);

export const Progress = model<IProgress>("Progress", progressSchema);
