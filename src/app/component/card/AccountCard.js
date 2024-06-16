import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
const AccountCard = ({ item, roleOptions }) => {
  const [edit, setEdit] = useState(false);
  const [selectedOption, SetSelectedOption] = useState({});

  const handleChange = (e) => {
    SetSelectedOption(e);
  };

  const handleUpdateRole = async () => {
    // try {
    //   const token = localStorage.getItem("token");
    //   const data = await axiosInstance.post(
    //     `/admin/accounts/${item?._id}`,
    //     {
    //       roleId: selectedOption.value,
    //     },
    //     {
    //       headers: {
    //         authorization: `Bearer ${token}`,
    //       },
    //     }
    //   );
    //   setEdit(false);
    //   toast.success(data?.data?.msg);
    //   setReload((pre) => !pre);
    // } catch (err) {
    //   toast.error(err?.message);
    // }
  };

  const handleChangeStatus = async () => {
    // try {
    //   const token = localStorage.getItem("token");
    //   if (token) {
    //     const data = await axiosInstance.post(
    //       `/admin/accounts/block/${item?._id}`,
    //       {},
    //       {
    //         headers: {
    //           authorization: `Bearer ${token}`,
    //         },
    //       }
    //     );
    //     toast.success(data?.data?.msg);
    //     setEdit(false);
    //     setReload((pre) => !pre);
    //   }
    // } catch (err) {
    //   toast.error(err?.response?.data?.msg);
    // }
  };
  return (
    <tr className="alert" role="alert">
      <td className="border-bottom-0-custom">1</td>
      <td className="d-flex align-items-center border-bottom-0-custom">
        <div className="img">
          <img
            style={{ width: "45px", height: "45px", borderRadius: "50%" }}
            src="https://res.cloudinary.com/sttruyen/image/upload/v1716255380/m4fomykpo7ycgccepee9.jpg"
          />
        </div>
        <div className="pl-3 email">
          <span>
            <Link to={`/user/profile/${item?._id}`}>Minh Quang</Link>
          </span>
          <span>2 phút trước</span>
        </div>
      </td>
      <td className="border-bottom-0-custom">
        {edit ? (
          <div className="col-12">
            <Select
              value={selectedOption}
              onChange={handleChange}
              options={roleOptions}
              defaultValue={selectedOption}
              placeholder="Role"
            />
          </div>
        ) : (
          "admin"
        )}
      </td>
      <td className="border-bottom-0-custom">20/10/2022</td>
      <td className="status border-bottom-0-custom">
        <span
          className={item?.active !== "Active" ? "active" : "inactiveColor"}
        >
          Hoạt động
        </span>
      </td>
      <td className="border-bottom-0-custom">
        {!edit ? (
          <>
            <button
              onClick={() => {
                setEdit(true);
              }}
              style={{ height: "30px", fontSize: "12px" }}
              type="button"
              className="btn btn-primary"
            >
              Sửa
            </button>
            <button
              onClick={() => {
                handleChangeStatus();
              }}
              style={{ marginLeft: "5px", height: "30px", fontSize: "12px" }}
              type="button"
              className="btn btn-danger"
            >
              Khóa
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                handleUpdateRole();
              }}
              style={{ height: "30px", fontSize: "12px" }}
              type="button"
              className="btn btn-danger"
            >
              Đồng ý
            </button>
            <button
              onClick={() => {
                setEdit(false);
              }}
              style={{ marginLeft: "5px", height: "30px", fontSize: "12px" }}
              type="button"
              className="btn btn-secondary"
            >
              Hủy
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default AccountCard;
