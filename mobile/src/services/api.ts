import axios from "axios";
import SessionController from "../utils/SessionController";

const localCasa = '192.168.15.112'
const localFATEC = '172.16.10.187'

export const api = axios.create({
  baseURL: `http://${localCasa}:3000`
});

api.interceptors.request.use(async (config: any) => {
  const token = await SessionController.getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});