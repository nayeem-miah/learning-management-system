import axiosInstance from "./axiosInstance"

export const GetSingleModule = async (id: string) => {
    try {
        const res = await axiosInstance.get(`/module/single/${id}`);
        const data = await res.data.data
        return data
    } catch (error) {
        console.log(error);
    }
}