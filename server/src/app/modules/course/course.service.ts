import { ICourse } from "./course.interface"
import { Course } from "./course.model";

const createCourse = async (payload: Partial<ICourse>) => {

    const course = await Course.create(payload);

    return {
        data: course
    }
}

const getAllCourse = async () => {

    const course = await Course.find();

    return {
        data: course
    }
}

const getSingleCourse = async (id: string) => {

    const course = await Course.findById(id);

    return {
        data: course
    }
}



export const CourseService = {
    createCourse,
    getAllCourse,
    getSingleCourse
}