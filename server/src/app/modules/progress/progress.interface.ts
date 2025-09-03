import { Types } from "mongoose";

export interface IProgress {
    userId: Types.ObjectId;
    courseId: Types.ObjectId;
    completedLectures: string[];
    unlockedLectures: string[];

}