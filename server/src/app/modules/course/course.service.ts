import { ICourse } from "./course.interface"
import { Course } from "./course.model";

const createCourse = async (payload: Partial<ICourse>) => {

    const course = await Course.create(payload);

    return {
        data: course
    }
}



export const CourseService = {
    createCourse
}