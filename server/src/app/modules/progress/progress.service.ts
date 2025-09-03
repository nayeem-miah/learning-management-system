import { Types } from "mongoose";
import { Lecture } from "../lecture/lecture.model";
import { Module } from "../module/module.model";
import { Progress } from "./progress.model";

const startCourse = async (userId: string, courseId: string) => {
    let progress = await Progress.findOne({ userId, courseId });

    if (!progress) {
        const firstModule = await Module.findOne({ course: courseId })
            .sort("moduleNumber");

        if (!firstModule) throw new Error("No module found");


        const firstLecture = await Lecture.findOne({ module: firstModule._id })
            .sort("lectureNumber");

        if (!firstLecture) throw new Error("No lecture found");

        progress = await Progress.create({
            userId,
            courseId,
            completedLectures: [],
            unlockedLectures: [firstLecture._id],
        });
    }

    return { data: progress };
};



export const progressService = {
    startCourse,

};