import axiosInstance from "./axiosInstance"

export const GetLecture = async () => {
    try {
        const res = await axiosInstance.get("/lecture");
        const data = await res.data.data
        return data
    } catch (error) {
        console.log(error);
    }
}