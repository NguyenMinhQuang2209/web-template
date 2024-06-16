import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const rePasswordRef = useRef();
  const nameRef = useRef();
  const navigate = useNavigate();
  const [msg, setMsg] = useState({});

  const handleRegister = async () => {
    const user = {
      gmail: emailRef.current?.value,
      password: passwordRef.current?.value,
      name: nameRef.current?.value,
      rePassword: rePasswordRef.current?.value,
    };
    let msgr = {};
    if (!user?.gmail) {
      msgr["gmail"] = "Gmail cannot be empty!";
    }
    if (!user.name) {
      msgr["name"] = "Name cannot be empty!";
    }
    if (!user.password) {
      msgr["password"] = "Password cannot be empty!";
    }
    if (!user.rePassword) {
      msgr["repassword"] = "Re-Password cannot be empty!";
    }

    if (user.name.length > 100) {
      msgr["name"] = "Length of name can not over 100 chacracters!";
    }
    if (user.password.length < 8) {
      msgr["password"] = "Password need more than 8 characters!";
    }
    if (user.password !== user.rePassword && !msgr["password"]) {
      msgr["password"] = "Password and Re-Password are not the same!";
      msgr["repassword"] = "Password and Re-Password are not the same!";
    }

    if (
      msgr["gmail"] ||
      msgr["password"] ||
      msgr["repassword"] ||
      msgr["name"]
    ) {
      setMsg({ ...msgr });
      return;
    }

    try {
      const data = await axios.post("/auth/register", {
        username: user.name,
        email: user.gmail,
        password: user.password,
        avatar:
          "https://res.cloudinary.com/sttruyen/image/upload/v1675845680/stphim/wmo0be0li80asrfw4uhw.jpg",
      });
      toast.success(data?.data?.msg);
      navigate("/login");
    } catch (err) {
      toast.error(err?.response?.data?.msg);
      let ms = {};
      err?.response?.data?.msgProgress?.forEach((item) => {
        ms[item?.errorName] = item?.message;
      });
      setMsg({ ...ms });
    }
  };

  // useEffect(() => {
  //   window.google?.accounts?.id?.initialize({
  //     client_id:
  //       "348299817023-08tbro4o6guo2csu2lv16mai16m4a8ce.apps.googleusercontent.com",
  //     callback: handleCallbackGoogle,
  //   });
  //   window.google?.accounts?.id?.renderButton(
  //     document.getElementById("loginGoogle"),
  //     {
  //       type: "icon",
  //       theme: "outline",
  //       size: "large",
  //     }
  //   );
  //   window.google?.accounts?.id?.prompt();
  // }, [window.google?.accounts]);

  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }

  // const handleCallbackGoogle = async (response) => {
  //   const user = parseJwt(response.credential);

  //   try {
  //     const data = await axios.post("/api/auth/register", {
  //       gmail: user.email,
  //       name: user.name,
  //       type: "google",
  //       image: user.picture,
  //       password: user.sub,
  //     });
  //     toast.success(data?.data?.msg);

  //     navigate("/login");
  //   } catch (err) {
  //     toast.error(err?.response?.data?.msg);
  //   }
  // };
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
          <h2>Đăng ký</h2>
          <div className="inputBox">
            {msg["name"] && (
              <div style={{ color: "red", margin: "10px 0", fontSize: "14px" }}>
                * <i>{msg["name"]}</i>
              </div>
            )}
            <input type="text" ref={nameRef} placeholder="Tên hiển thị" name="" />
          </div>
          <div className="inputBox">
            {msg["gmail"] && (
              <div style={{ color: "red", margin: "10px 0", fontSize: "14px" }}>
                * <i>{msg["gmail"]}</i>
              </div>
            )}
            <input type="text" ref={emailRef} placeholder="email" name="" />
          </div>
          {msg["password"] && (
            <div
              style={{
                color: "red",
                marginBottom: "-20px",
                fontSize: "14px",
              }}
            >
              * <i>{msg["password"]}</i>
            </div>
          )}
          <div className="inputBox">
            <input
              type="password"
              ref={passwordRef}
              placeholder="Mật khẩu"
              name=""
            />
            <div
              onClick={() => {
                if (passwordRef.current) {
                  if (passwordRef.current.type === "text") {
                    passwordRef.current.type = "password";
                  } else {
                    passwordRef.current.type = "text";
                  }
                }
              }}
              className="eyes_items"
            >
              <i className="fa-solid fa-eye"></i>
            </div>
          </div>
          {msg["repassword"] && (
            <div
              style={{
                color: "red",
                marginBottom: "-20px",
                fontSize: "14px",
              }}
            >
              * <i>{msg["repassword"]}</i>
            </div>
          )}
          <div className="inputBox">
            <input
              type="password"
              ref={rePasswordRef}
              placeholder="Nhập lại mật khẩu"
              name=""
            />
            <div
              onClick={() => {
                if (rePasswordRef.current) {
                  if (rePasswordRef.current.type === "text") {
                    rePasswordRef.current.type = "password";
                  } else {
                    rePasswordRef.current.type = "text";
                  }
                }
              }}
              className="eyes_items"
            >
              <i className="fa-solid fa-eye"></i>
            </div>
          </div>
          <div className="inputBox">
            <input
              onClick={handleRegister}
              type="submit"
              value="Đăng ký"
              id="btn"
            />
          </div>
          <div className="group">
            <Link to="/forgot_password">Quên mật khẩu</Link>
            <Link style={{ textDecoration: "none" }} to="/login">
              Đăng nhập
            </Link>
          </div>
          {/* <div className="auth_wrap_other">
            <div id="loginGoogle"></div>
          </div> */}
        </div>
      </section>
      {/* <HomeIcons /> */}
    </div>
  );
};

export default Register;
