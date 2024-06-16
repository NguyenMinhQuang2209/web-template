import { toast } from "react-toastify";
import axiosInstance from "../component/axios_custom/AxiosCustom";

const CategoryService = {
  getAll: async () => {
    try {
      const data = await axiosInstance.get("/admin/categories");
      return data.data;
    } catch (err) {
      toast.error(err?.response?.data?.Error);
    }
  },
  create: async (category) => {
    return await axiosInstance.post("/api/admin/categories", category);
  },
  update: async (category) => {
    return await axiosInstance.put("/admin/categories", category);
  },
};
export default CategoryService;
