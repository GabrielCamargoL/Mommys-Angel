import axios from "axios";
import SessionController from "../utils/SessionController";

export const api = axios.create({
  baseURL: 'http://192.168.15.112:3000'
});

api.interceptors.request.use(async (config: any) => {
  const token = await SessionController.getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});