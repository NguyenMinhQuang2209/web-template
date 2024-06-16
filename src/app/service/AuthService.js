import axios from "axios";
import axiosInstance from "../component/axios_custom/AxiosCustom";

const AuthAPI = {
  login: async ({ user }) => {
    return await axios.post("/api/auth/common/admin/login", user);
  },
  createAccount:async (user) => {
    return await axiosInstance.post('/api/auth/admin/register',user);
  }
};

export default AuthAPI;
