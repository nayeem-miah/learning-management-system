import axiosInstance from "./axiosInstance"

export const GetSingleCourseByModule = async (course: string) => {
    try {
        const res = await axiosInstance.get(`/module/${course}`);
        console.log(course);

        const data = await res.data.data
        return data
    } catch (error) {
        console.log(error);
    }
}