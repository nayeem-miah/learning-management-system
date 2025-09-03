import { ILecture } from "./lecture.interface";
import { Lecture } from "./lecture.model";


const createLecture = async (payload: Partial<ILecture>) => {
    const countLecture = await Lecture.countDocuments({ module: payload.module });

    const newLecture = {
        ...payload,
        lectureNumber: countLecture + 1
    }

    const lecture = await Lecture.create(newLecture);
    // console.log(lecture);
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

const getLecturesByModule = async (moduleId: string, search?: string) => {
    const query: any = { module: moduleId };

    if (search) {
        query.title = { $regex: search, $options: "i" };
    }

    const lectures = await Lecture.find(query)
        .populate("module")
        .sort({ lectureNumber: 1 });

    return { data: lectures };
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
    getLecturesByModule,
    updateLecture,
    deleteLecture
}