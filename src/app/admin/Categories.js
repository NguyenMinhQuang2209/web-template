import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./customStyle.scss";
import CategoryService from "../service/CategoryService";
import ImageService from "../service/ImageService";
import { toast } from "react-toastify";

const Categories = () => {
  const [addNewShow, setAddNewShow] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleGetAllCategory = async () => {
    try {
      const data = await CategoryService.getAll();
      console.log(data.data);
    } catch (err) {
      toast.error(err?.response?.data?.Error);
    }
  };

  useEffect(() => {
    handleGetAllCategory();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          marginTop: "20px",
          justifyContent: "flex-end",
        }}
      >
        <button
          onClick={() => {
            setAddNewShow(true);
          }}
          className="btn btn-primary"
        >
          Thêm mới
        </button>
      </div>
      <section style={{ marginTop: "15px" }} className="ftco-section">
        <div className="row">
          <div className="col-md-12">
            <div className="table-wrap">
              <table className="table table-responsive-xl">
                <thead>
                  <tr>
                    <th style={{ width: "10%" }}>ID</th>
                    <th style={{ width: "20%" }}>Icon</th>
                    <th style={{ width: "30%" }}>Tên</th>
                    <th style={{ width: "20%" }}>Status</th>
                    <th style={{ width: "20%" }}>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="alert" role="alert">
                    <td className="border-bottom-0-custom">1</td>
                    <td className="d-flex align-items-center border-bottom-0-custom">
                      <div className="img">
                        <img
                          style={{
                            width: "45px",
                            height: "45px",
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                          src="https://res.cloudinary.com/sttruyen/image/upload/v1716255380/m4fomykpo7ycgccepee9.jpg"
                        />
                      </div>
                    </td>
                    <td className="border-bottom-0-custom">Thịt</td>
                    <td className="status border-bottom-0-custom">
                      <span className={"active"}>Hoạt động</span>
                    </td>
                    <td className="border-bottom-0-custom">
                      <button
                        style={{ height: "30px", fontSize: "12px" }}
                        type="button"
                        className="btn btn-danger"
                      >
                        Riêng tư
                      </button>
                      <button
                        style={{
                          marginLeft: "5px",
                          height: "30px",
                          fontSize: "12px",
                        }}
                        type="button"
                        className="btn btn-secondary"
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {/* {accounts?.accounts && <Pagination count={accounts?.total} />} */}
      {addNewShow && <AddNewCategory setShow={setAddNewShow} />}
    </div>
  );
};

const AddNewCategory = ({ setShow, current }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const [error, setError] = useState({
    categoryName: "",
    categoryImage: "",
  });

  const nameRef = useRef();

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];

    if (file) {
      setImageFile(file);
      const img = new Image();
      const reader = new FileReader();

      reader.onload = (e) => {
        img.src = e.target.result;
      };

      img.onload = () => {
        setImageSrc(img.src);
      };

      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxFiles: 1,
  });

  const handleCreateCategory = async () => {
    try {
      let category = {
        categoryImage: current?.categoryImage || "",
        categoryName: nameRef.current.value,
      };

      let newErr = {};
      let isErr = false;

      if (!category.categoryName) {
        isErr = true;
        newErr["categoryName"] = "Tên thể loại không được bỏ trống!";
      }
      if (!imageSrc) {
        isErr = true;
        newErr["categoryImage"] = "Ảnh thể loại không được bỏ trống!";
      }
      setError({ ...newErr });
      if (!isErr) {
        if (imageFile) {
          const url = await ImageService.uploadImagesToCloudinary(imageFile);
          console.log(url);
        }
        const data = await CategoryService.create(category);
        console.log(data.data);
        setShow(false);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <div className="create_container">
      <div className="create_wrap">
        <div
          onClick={() => {
            setShow(false);
          }}
          className="create_close_wrap"
        >
          <i className="fa-solid fa-x"></i>
        </div>
        <div>
          {error?.categoryImage && (
            <div className="create_input_container">
              <i
                style={{
                  color: "red",
                  marginBottom: "-20px",
                  marginTop: "0px",
                }}
              >
                {error?.categoryImage}
              </i>
            </div>
          )}
          <div {...getRootProps()} className="dropzone_container">
            <input {...getInputProps()} />
            {imageSrc ? (
              <img src={imageSrc} alt="Uploaded" className="dropzone_image" />
            ) : (
              <p>Thêm ảnh vào đây</p>
            )}
          </div>
          {error?.categoryName && (
            <div className="create_input_container">
              <i
                style={{
                  color: "red",
                  marginBottom: "10px",
                  marginTop: "-10px",
                }}
              >
                {error?.categoryName}
              </i>
            </div>
          )}
          <div className="create_input_container">
            <input
              placeholder="Thể loại mới *"
              className="create_input"
              name="category"
              ref={nameRef}
            />
          </div>
          <div className="btn_create_container">
            <button
              onClick={handleCreateCategory}
              style={{ margin: "0 5px" }}
              className="btn btn-primary"
            >
              Tạo mới
            </button>
            <button
              onClick={() => {
                setShow(false);
              }}
              style={{ margin: "0 5px" }}
              className="btn btn-secondary"
            >
              Hủy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
