import axiosInstance from "./axiosInstance"

export const GetSingleModuleByLecture = async (module: string) => {
    try {
        const res = await axiosInstance.get(`/lecture/${module}`);
        // console.log(course);

        const data = await res.data.data
        return data
    } catch (error) {
        console.log(error);
    }
}