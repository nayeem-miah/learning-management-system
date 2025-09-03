import { Types } from "mongoose";

export interface ILecture {
    module: Types.ObjectId;
    title: string;
    videoUrl: string;
    pdfNotes?: string[];
}