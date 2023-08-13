import api from "@/shared/api";
import { CreateUsersType, ResponseToken } from "@/type/Auth.dto";
import constantApi from "./constantApi";

export default class AuthService {
    static async sigIn(dataLogin: CreateUsersType): Promise<ResponseToken> {
        const response = await api.post(constantApi.LOGIN, dataLogin)
        return response.data
    }
    static async sigUp(dataLogin: CreateUsersType): Promise<ResponseToken> {
        const response = await api.post(constantApi.REGISTRATION, dataLogin, { withCredentials: true })
        return response.data
    }
}