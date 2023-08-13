import axios, { CreateAxiosDefaults } from "axios";

const config: CreateAxiosDefaults = {
    baseURL: 'http://localhost:5555'
}

const api = axios.create(config)

export default api