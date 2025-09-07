import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://server-jet-ten.vercel.app/api",
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;