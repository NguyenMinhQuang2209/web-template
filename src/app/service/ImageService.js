import axios from "axios";
import { toast } from "react-toastify";

const cloudinaryAxios = axios.create({
  baseURL: "https://api.cloudinary.com/v1_1/sttruyen/image/upload",
});

const ImageService = {
  uploadImagesToCloudinary: async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "sttruyenxyz");

      const res = await cloudinaryAxios.post(
        "https://api.cloudinary.com/v1_1/sttruyen/image/upload",
        formData
      );
      let url = "https:" + res.data.url.split(":")[1];
      return url;
    } catch (err) {
      toast.error(err?.message);
    }
  },
};

export default ImageService;
