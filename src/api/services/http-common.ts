import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, } from "axios";
import { UserAuthStore } from "@/store/AuthStore/AuthStore";
import pinia from '@/store'

const authUser = UserAuthStore(pinia);
const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});
apiClient.defaults.withCredentials = true;
const onErrorResponse = (error: AxiosError | Error): Promise<AxiosError> => {
  if (axios.isAxiosError(error)) {
    const { status } = error.response as AxiosResponse ?? {};

    switch (status) {
      case 401: {
        authUser.deleteAuthUser();
        window.location.href = "/auth/login"
        // "Login required"
        break;
      }
      case 403: {
        // "Permission denied"
        break;
      }
      case 404: {
        window.location.href = "/404"
        // "Invalid request"
        break;
      }
      case 500: {
        // "Server error"
        break;
      }
      default: {
        // "Unknown error occurred"
        break;
      }
    }
  } else {
    // Other type of error
  }

  return Promise.reject(error);
};


apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = authUser.getToken
    if (token && config.headers){
      config.headers.Authorization = `Bearer ${token}`
    }
  return config;
}, onErrorResponse);

apiClient.interceptors.response.use((response: AxiosResponse) => {
  return response;
}, onErrorResponse);

export default apiClient;
