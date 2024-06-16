import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "../component/pagination/Pagination";
import AccountCard from "../component/card/AccountCard";
import { toast } from "react-toastify";
import AuthService from "../service/AuthService";
const Accounts = () => {
  const [accounts, setAccounts] = useState({});

  const [roleOptions, setRoleOptions] = useState([]);

  const { search } = useLocation();
  const getQueryParam = (name) => {
    const searchParams = new URLSearchParams(search);
    return searchParams.get(name) || (name == "page" ? "1" : "");
  };

  const [reload, setReload] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  // useEffect(() => {
  //   if (getQueryParam("search")) {
  //     handleGetAllAccounts(
  //       `page=${getQueryParam("page")}&search=${getQueryParam("search")}`
  //     );
  //   } else {
  //     handleGetAllAccounts(`page=${getQueryParam("page")}`);
  //   }
  // }, [reload, search]);

  // useEffect(() => {
  //   handleGetRole();
  // }, []);

  const handleGetAllAccounts = async (query) => {
    // try {
    //   const token = localStorage.getItem("token")
    //   const data = await axiosInstance.get(`/admin/accounts?${query}`, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   });
    //   setAccounts(data?.data);
    // } catch (err) {
    //   toast.error(err?.message);
    // }
  };

  const handleGetRole = async () => {
    // try {
    //   const token = localStorage.getItem("token");
    //   const data = await axiosInstance.get("/admin/roles", {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   });
    //   let tempArr = [];
    //   data.data?.roles?.forEach((item) => {
    //     tempArr = [
    //       ...tempArr,
    //       {
    //         value: item?._id,
    //         label: item?.name,
    //       },
    //     ];
    //   });
    //   setRoleOptions([...tempArr]);
    // } catch (err) {
    //   toast.error(err?.message);
    // }
  };

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
            setShowAdd(true);
          }}
          className="btn btn-primary"
        >
          Thêm mới tk admin
        </button>
      </div>
      <section style={{ marginTop: "15px" }} className="ftco-section">
        <div className="row">
          <div className="col-md-12">
            <div className="table-wrap">
              <table className="table table-responsive-xl">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Thông tin</th>
                    <th>Vai trò</th>
                    <th>Đến ngày</th>
                    <th>Status</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <AccountCard
                    setReload={setReload}
                    roleOptions={roleOptions}
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {accounts?.accounts && <Pagination count={accounts?.total} />}
      {showAdd && <AddNewAccount setShow={setShowAdd} />}
    </div>
  );
};
const AddNewAccount = ({ setShow }) => {
  const [err, setErr] = useState({
    username: "",
    email: "",
    password: "",
  });

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleCreateNewAccount = async () => {
    try {
      const user = {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      const userFeildName = {
        username: "Tên",
        email: "Email",
        password: "Mật khẩu",
      };
      let isErr = false;
      let newError = {};
      for (const [key, value] of Object.entries(user)) {
        if (!user[key]) {
          isErr = true;
          newError[key] = userFeildName[key] + " không được bỏ trống!";
        }
      }
      setErr(newError);

      if (!isErr) {
        const data = await AuthService.createAccount(user);
        toast.success(data?.data?.Message);
        setShow(false);
      }
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.Error);
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
        <div style={{ marginBottom: "20px", marginTop: "30px" }}>
          {err?.username && (
            <div className="create_input_container">
              <i
                style={{
                  color: "red",
                  marginBottom: "0px",
                  marginTop: "15px",
                }}
              >
                {err?.username}
              </i>
            </div>
          )}
          <div className="create_input_container">
            <input
              ref={usernameRef}
              placeholder="Tên *"
              className="create_input"
              name="text"
            />
          </div>
          {err?.email && (
            <div className="create_input_container">
              <i
                style={{
                  color: "red",
                  marginBottom: "-20px",
                  marginTop: "15px",
                }}
              >
                {err?.email}
              </i>
            </div>
          )}
          <div style={{ marginTop: "20px" }} className="create_input_container">
            <input
              ref={emailRef}
              placeholder="Email *"
              className="create_input"
              name="email"
            />
          </div>
          {err?.password && (
            <div className="create_input_container">
              <i
                style={{
                  color: "red",
                  marginBottom: "-20px",
                  marginTop: "15px",
                }}
              >
                {err?.password}
              </i>
            </div>
          )}
          <div style={{ marginTop: "20px" }} className="create_input_container">
            <input
              ref={passwordRef}
              placeholder="Mật khẩu *"
              className="create_input"
              type="password"
            />
          </div>
          <div className="btn_create_container">
            <button
              onClick={handleCreateNewAccount}
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

export default Accounts;
