import { model, Schema } from "mongoose";
import { ILecture } from "./lecture.interface";

const lectureSchema = new Schema<ILecture>({
    module: {
        type: Schema.Types.ObjectId,
        ref: "Module",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    videoUrl: {
        type: String,
        required: true
    },
    pdfNotes: {
        type: [String]
    }

},
    { timestamps: true, versionKey: false }
);

export const Lecture = model<ILecture>("Lecture", lectureSchema)