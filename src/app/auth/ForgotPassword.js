import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const ForgotPassword = () => {
  const emailRef = useRef();

  const [msg, setMsg] = useState({});

  const navigate = useNavigate();

  const handleForgotPassword = async () => {
    const user = {
      gmail: emailRef.current?.value,
    };
    let msgr = {};
    if (!user?.gmail) {
      msgr["gmail"] = "Email không được trống!";
    }
    if (msgr["gmail"]) {
      setMsg({ ...msgr });
      return;
    }
    try {
      const data = await axios.put("/auth/forgot_password", {
        email: user.gmail,
      });
      toast.success(data?.data?.msg);
      navigate("/login");
    } catch (err) {
      toast.error(err?.response?.data?.msg);
    }
  };
  return (
    <div className="auth">
      <section>
        <div className="leaves">
          <div className="set">
            <div>
              <img src="https://res.cloudinary.com/sttruyen/image/upload/v1677939541/another/l3q1ea8alrwhtvweid2p.png" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sttruyen/image/upload/v1677939546/another/qayvuhuhcafaptrv9qay.png" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sttruyen/image/upload/v1677939546/another/iycggpjlelz9qkdgyb7i.png" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sttruyen/image/upload/v1677939548/another/lqrsgyzillb26nbfw2j9.png" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sttruyen/image/upload/v1677939541/another/l3q1ea8alrwhtvweid2p.png" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sttruyen/image/upload/v1677939546/another/qayvuhuhcafaptrv9qay.png" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sttruyen/image/upload/v1677939546/another/iycggpjlelz9qkdgyb7i.png" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sttruyen/image/upload/v1677939548/another/lqrsgyzillb26nbfw2j9.png" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sttruyen/image/upload/v1677939541/another/l3q1ea8alrwhtvweid2p.png" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sttruyen/image/upload/v1677939546/another/qayvuhuhcafaptrv9qay.png" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sttruyen/image/upload/v1677939546/another/iycggpjlelz9qkdgyb7i.png" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sttruyen/image/upload/v1677939548/another/lqrsgyzillb26nbfw2j9.png" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sttruyen/image/upload/v1677939541/another/l3q1ea8alrwhtvweid2p.png" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sttruyen/image/upload/v1677939546/another/qayvuhuhcafaptrv9qay.png" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sttruyen/image/upload/v1677939546/another/iycggpjlelz9qkdgyb7i.png" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sttruyen/image/upload/v1677939548/another/lqrsgyzillb26nbfw2j9.png" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sttruyen/image/upload/v1677939541/another/l3q1ea8alrwhtvweid2p.png" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sttruyen/image/upload/v1677939546/another/qayvuhuhcafaptrv9qay.png" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sttruyen/image/upload/v1677939546/another/iycggpjlelz9qkdgyb7i.png" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sttruyen/image/upload/v1677939548/another/lqrsgyzillb26nbfw2j9.png" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sttruyen/image/upload/v1677939541/another/l3q1ea8alrwhtvweid2p.png" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sttruyen/image/upload/v1677939546/another/qayvuhuhcafaptrv9qay.png" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sttruyen/image/upload/v1677939546/another/iycggpjlelz9qkdgyb7i.png" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sttruyen/image/upload/v1677939548/another/lqrsgyzillb26nbfw2j9.png" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sttruyen/image/upload/v1677939541/another/l3q1ea8alrwhtvweid2p.png" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sttruyen/image/upload/v1677939546/another/qayvuhuhcafaptrv9qay.png" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sttruyen/image/upload/v1677939546/another/iycggpjlelz9qkdgyb7i.png" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/sttruyen/image/upload/v1677939548/another/lqrsgyzillb26nbfw2j9.png" />
            </div>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/sttruyen/image/upload/v1677939634/another/xvivywsemezjozusubhc.png"
          className="bg"
        />
        <img
          src="https://res.cloudinary.com/sttruyen/image/upload/v1677939662/another/qxu2ht94ggwigobzjt7b.png"
          className="girl"
        />
        <img
          src="https://res.cloudinary.com/sttruyen/image/upload/v1677939671/another/h9flx2xhbewwws4mum5i.png"
          className="girl1"
        />
        <img
          src="https://res.cloudinary.com/sttruyen/image/upload/v1677939696/another/bqvvw6z2tbax5v0s5epd.png"
          className="bikerboy"
        />
        <img
          src="https://res.cloudinary.com/sttruyen/image/upload/v1677939712/another/uxilcnteauzggtpdrfwd.png"
          className="trees"
        />
        <div className="login">
          <h2>Quên mật khẩu</h2>
          <div className="inputBox">
            {msg["gmail"] && (
              <div style={{ color: "red", margin: "10px 0", fontSize: "14px" }}>
                * <i>{msg["gmail"]}</i>
              </div>
            )}
            <input type="text" ref={emailRef} placeholder="gmail" name="" />
          </div>
          <div className="inputBox">
            <input onClick={handleForgotPassword} type="submit" value="Quên mật khẩu" id="btn" />
          </div>
          <div className="group">
            <Link to="/login">Đăng nhập</Link>
            <Link style={{ textDecoration: "none" }} to="/register">
              Đăng ký
            </Link>
          </div>
        </div>
      </section>
      {/* <HomeIcons /> */}
    </div>
  );
};

export default ForgotPassword;
