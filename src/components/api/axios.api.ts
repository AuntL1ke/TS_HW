import axios from "axios";
import { GetToken } from "../helpers/localStorage.helper";


export const instance = axios.create({
    baseURL:"https://webapi-shoptech-pv321-hxc4cna7gab9ghhc.westeurope-01.azurewebsites.net/api/",
    withCredentials:false,
    headers:{
        Authorization:"Bearer "+GetToken()||""
    }
})
instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
  
      return config;
    },
    (error) => {
      return Promise.reject(error);
    });