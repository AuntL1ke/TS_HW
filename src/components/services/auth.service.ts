import { instance } from "../api/axios.api";
import { RemoveToken } from "../helpers/localStorage.helper";
import { ILoginDto, IRegisterDto } from "../types/User";

export const AuthService={
    async login(userData:ILoginDto):Promise<string|undefined>{
    
    const result= await instance.post<string>('accounts/login',userData);
    console.log(result);
    return result.data;
    },

    async register(userData: IRegisterDto):Promise<any> {
        const result = await instance.post<IRegisterDto>('accounts/registration', userData)
        console.log(result);
    },

    async logout(){
        RemoveToken();
    }
}