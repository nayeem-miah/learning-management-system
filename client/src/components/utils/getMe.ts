import axiosInstance from "./axiosInstance"

export const GetUser = async () => {
    try {
        const res = await axiosInstance.get("/user/me");
        const data = await res.data.data
        return data
    } catch (error) {
        console.log(error);
    }
}