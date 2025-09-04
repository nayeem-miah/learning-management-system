import axios from 'axios';

console.log(process.env.BASE_URL);
const axiosInstance = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;