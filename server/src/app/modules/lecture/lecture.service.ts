import { ILecture } from "./lecture.interface";
import { Lecture } from "./lecture.model";


const createLecture = async (payload: Partial<ILecture>) => {
    const lecture = await Lecture.create(payload);
    return {
        data: lecture
    }
};

const getAllLecture = async () => {
    const lecture = await Lecture.find().populate("module");
    return {
        data: lecture
    }
};

const moduleIdByGetLecture = async (module: string) => {
    const lecture = await Lecture.find({ module: module }).populate("module");
    return {
        data: lecture
    }
};

const updateLecture = async (id: string, payload: Partial<ILecture>) => {
    const lecture = await Lecture.findByIdAndUpdate(id, payload, { new: true, runValidators: true });

    return {
        data: lecture
    }
};

const deleteLecture = async (id: string) => {
    const lecture = await Lecture.findByIdAndDelete(id);
    return {
        data: lecture
    }
};

export const lectureService = {
    createLecture,
    getAllLecture,
    moduleIdByGetLecture,
    updateLecture,
    deleteLecture
}