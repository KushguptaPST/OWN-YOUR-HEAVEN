// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
  headers:{
    'Content-Type':'application/json',
  }
});

// Automatically attach access token
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle 401 and logout automatically
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest.retry) {
      originalRequest.retry=true;
      const refreshToken = localStorage.getItem('refreshToken')
      try{
        const response = await api.post('/token/refresh/',{refresh:refreshToken})
        localStorage.setItem("accessToken", response.data.access)
        config.headers['Authorization'] = `Bearer ${response.data.access}`;
        return api(originalRequest)
      }catch(error){
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
      }
    }
    return Promise.reject(error);
  }
);

export default api;
