// axiosInstance.js

import axios from 'axios';
import { jwtDecode } from "jwt-decode";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 10000, 
  withCredentials:true
});

// Function to check if token is expired
const isTokenExpired = (token) => {
  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Convert to seconds
    return decoded.exp < currentTime;
  } catch (error) {
    return true; // Error in decoding or expired
  }
};

// Add a request interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      if (isTokenExpired(token)) {
        try {
          const response = await axios.get("/api/auth/common/get-new-access-token", {
            withCredentials: true,
          });
          localStorage.setItem('token',response?.data?.accessToken);
          config.headers.Authorization = `Bearer ${response?.data?.accessToken}`;
        } catch (refreshError) {
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          window.location.href = "/login";
          return Promise.reject(refreshError);
        }
      } else {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
