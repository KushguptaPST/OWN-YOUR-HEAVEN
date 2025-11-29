// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
  headers: {
    'Content-Type': 'application/json',
  }
});

// Automatically attach access token
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`; // fixed variable
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
    
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // fix flag name
      const refreshToken = localStorage.getItem("refreshToken");

      try {
        const res = await api.post('/token/refresh/', { refresh: refreshToken });
        localStorage.setItem("accessToken", res.data.access);

        originalRequest.headers['Authorization'] =
          `Bearer ${res.data.access}`;

        return api(originalRequest);
      } catch (err) {
        console.log(err)
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      }
    }

    return Promise.reject(error);
  }
);

export default api;
