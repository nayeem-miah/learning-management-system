import axiosInstance from "./axiosInstance"

export const GetCourses = async () => {
    try {
        const res = await axiosInstance.get("/course");
        const data = await res.data.data
        return data
    } catch (error) {
        console.log(error);
    }
}