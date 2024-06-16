import React, { useEffect, useState } from "react";
import "./style.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import Dashboard from "./Dashboard";
import Accounts from "./Accounts";
import axios from "axios";
import { toast } from "react-toastify";
import Categories from "./Categories";
import Paidcombo from "./Paidcombo";
import StoreownerConfirm from "./StoreownerConfirm";
import Products from "./Products";
import Theme from "./Theme";
import Payment from "./Payment";

const Admin = () => {
  const { slug } = useParams();

  const navigate = useNavigate();
  const [type, setType] = useState("");

  const [user, setUser] = useState({});

  useEffect(() => {
    const use = localStorage.getItem("user");
    setUser(JSON.parse(use));
  }, []);

  useEffect(() => {
    setType(slug);
  }, [slug]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    toast.success("Đăng xuất thành công.");
    navigate("/");
  };

  return (
    <>
      <div
        style={{ marginLeft: "100px" }}
        className="position-relative bg-white d-flex p-0"
      >
        <div className="sidebar pe-2 pb-3">
          <nav className="navbar bg-light navbar-light">
            <Link href="index.html" className="navbar-brand mx-4 mb-3">
              <h3 className="text-primary">
                <i className="fa fa-hashtag me-2"></i>DASHMIN
              </h3>
            </Link>
            <div className="d-flex align-items-center ms-4 mb-4">
              <div className="position-relative">
                <img
                  className="rounded-circle"
                  src="https://res.cloudinary.com/sttruyen/image/upload/v1694770029/another/ynkleg4mv9ys1lxs9isl.gif"
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
              </div>
              <div className="ms-3">
                <h6 className="mb-0">Minh Quang</h6>
                <span>Admin</span>
              </div>
            </div>
            <div style={{ minHeight: "50vh" }} className="navbar-nav w-100">
              <Link
                to="/admin/dashboard"
                className={`nav-item nav-link ${
                  type === "dashboard" && "active"
                }`}
              >
                <i className="fa fa-tachometer-alt me-2"></i>Dashboard
              </Link>
              <Link
                to="/admin/accounts"
                className={`nav-item nav-link ${
                  type === "accounts" && "active"
                }`}
              >
                <i className="fa fa-users me-2"></i>Tài khoản
              </Link>
              <Link
                to="/admin/categories"
                className={`nav-item nav-link ${
                  type === "categories" && "active"
                }`}
              >
                <i className="fa fa-list me-2"></i>Thể loại
              </Link>
              <Link
                to="/admin/products"
                className={`nav-item nav-link ${
                  type === "products" && "active"
                }`}
              >
                <i className="fa fa-box-open me-2"></i>Sản phẩm
              </Link>
              <Link
                to="/admin/storeownersconfirm"
                className={`nav-item nav-link ${
                  type === "storeownersconfirm" && "active"
                }`}
              >
                <i className="fa fa-check me-2"></i>Tiểu thương
              </Link>
              <Link
                to="/admin/paidcombo"
                className={`nav-item nav-link ${
                  type === "paidcombo" && "active"
                }`}
              >
                <i className="fa fa-money-bill me-2"></i>Gói giá tiền
              </Link>
              <Link
                to="/admin/payment"
                className={`nav-item nav-link ${
                  type === "payment" && "active"
                }`}
              >
                <i className="fa fa-money-bill-1 me-2"></i>Xác nhận thanh toán
              </Link>
              <Link
                to="/admin/theme"
                className={`nav-item nav-link ${
                  type === "theme" && "active"
                }`}
              >
                <i className="fa fa-droplet me-2"></i>Theme
              </Link>
            </div>
          </nav>
        </div>
        <div className="content">
          <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
            <div
              style={{ marginTop: "10px" }}
              className="d-none d-md-flex ms-4 align-content-center"
            ></div>
            <div className="navbar-nav align-items-center ms-auto">
              <div className="nav-item dropdown">
                <div
                  style={{ cursor: "pointer" }}
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <img
                    className="rounded-circle me-lg-2"
                    src="https://res.cloudinary.com/sttruyen/image/upload/v1694770029/another/ynkleg4mv9ys1lxs9isl.gif"
                    alt=""
                    style={{ width: "40px", height: "40px" }}
                  />
                  <span className="d-none d-lg-inline-flex">Minh Quang</span>
                </div>
                <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0 box_item">
                  <Link className="link" style={{ color: "black" }} to="/">
                    <div style={{ cursor: "pointer" }} className="drop_item">
                      Trang chủ
                    </div>
                  </Link>
                  <div
                    onClick={handleLogout}
                    style={{ cursor: "pointer" }}
                    className="drop_item"
                  >
                    Đăng xuất
                  </div>
                </div>
              </div>
            </div>
          </nav>
          {type === "dashboard" && <Dashboard />}
          {type === "accounts" && <Accounts />}
          {type === "categories" && <Categories />}
          {type === "products" && <Products />}
          {type === "storeownersconfirm" && <StoreownerConfirm />}
          {type === "paidcombo" && <Paidcombo />}
          {type === "theme" && <Theme />}
          {type === "payment" && <Payment />}
        </div>
      </div>
      <div
        href="#"
        className="btn btn-lg btn-primary btn-lg-square back-to-top"
      >
        <i className="fa fa-arrow-up"></i>
      </div>
    </>
  );
};
export default Admin;
