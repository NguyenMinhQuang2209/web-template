import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
const Home = () => {
  const navigate = useNavigate();

  const isTokenExpired = (token) => {
    try {
      const decoded = jwtDecode(token);
      console.log(decoded);
      const currentTime = Date.now() / 1000; // Convert to seconds
      return decoded.exp < currentTime;
    } catch (error) {
      return true; // Error in decoding or expired
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/admin/dashboard");
    }
  }, []);

  return (
    <div>
      <div>
        <header className="header-section">
          <div className="container">
            <Link
              style={{ marginTop: "-8px" }}
              className="link site-logo d-flex"
              to="/"
            >
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  marginRight: "5px",
                }}
                src="img/logo.png"
              />
              <h2
                style={{
                  display: "flex",
                  color: "white",
                  alignItems: "center",
                  fontSize: "25px",
                }}
              >
                Online{" "}
                <p
                  style={{
                    marginLeft: "3px",
                    color: "orange",
                    fontWeight: "700",
                    fontSize: "25px",
                    marginTop: "0",
                    marginBottom: "0px",
                    lineHeight: "0px",
                  }}
                >
                  Market
                </p>
              </h2>
            </Link>
            <div>
              <Link className="link" to="/login">
                <div style={{ color: "black" }} className="user-panel">
                  Đăng nhập
                </div>
              </Link>
            </div>
          </div>
        </header>
      </div>
      <HeroSection />
    </div>
  );
};
const HeroSection = () => {
  return (
    <section className="hero-section">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/slider-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="custom-caption">
            <div className="text-customer">
              <div className="container hs-text-custom">
                <h2>
                  Chợ <span>mới</span> độc nhất
                </h2>
                <p>Một hệ thống hỗ trợ cho các tiểu thương</p>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/slider-2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="custom-caption">
            <div className="text-customer">
              <div className="container hs-text-custom">
                <h2>
                  Rất nhiều <span>mặt hàng</span>
                </h2>
                <p>Có rất nhiều mặt hàng trên hệ thống.</p>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Home;
