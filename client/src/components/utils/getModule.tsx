import axiosInstance from "./axiosInstance"

export const GetModules = async () => {
    try {
        const res = await axiosInstance.get("/module");
        const data = await res.data.data
        return data
    } catch (error) {
        console.log(error);
    }
}