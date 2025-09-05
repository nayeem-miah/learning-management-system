import axiosInstance from "./axiosInstance"

export const GetSIngleById = async (id: string) => {
    try {
        const res = await axiosInstance.get(`/course/${id}`);
        const data = await res.data.data
        return data
    } catch (error) {
        console.log(error);
    }
}