import { Types } from "mongoose";

export interface ILecture {
    _id: Types.ObjectId;
    module: Types.ObjectId;
    title: string;
    videoUrl: string;
    pdfNotes?: string[];
    lectureNumber: number;
}