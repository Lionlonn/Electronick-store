import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://192.168.56.1:3002/'
})
