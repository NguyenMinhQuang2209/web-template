import React, { useContext, useRef, useState } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import AuthAPI from "../service/AuthService";
const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [msg, setMsg] = useState({});

  const navigate = useNavigate();

  const handleLogin = async () => {
    const user = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };
    let msgr = {};
    if (!user?.email) {
      msgr["gmail"] = "Gmail cannot be empty!";
    }
    if (!user.password) {
      msgr["password"] = "Password cannot be empty!";
    }

    if (user.password.length < 8 && !msgr["password"]) {
      msgr["password"] = "Password need more than 8 characters!";
    }
    if (msgr["gmail"] || msgr["password"]) {
      setMsg({ ...msgr });
      return;
    }
    try {
      const data = await AuthAPI.login({ user });
      localStorage.setItem("token", data?.data?.accessToken);
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: data?.data?.username,
          avatar: data?.data?.avatar,
        })
      );
      toast.success("Đăng nhập thành công.");
      navigate("/admin/dashboard");
    } catch (err) {
      let ms = {
        gmail: "Gmail or password are incorrect!",
        password: "Gmail or password are incorrect!",
      };

      setMsg({ ...ms });
      toast.error(err?.response?.data?.Error);
    }
  };

  // useEffect(() => {
  // 	window.google?.accounts?.id?.initialize({
  // 		client_id:
  // 			"348299817023-08tbro4o6guo2csu2lv16mai16m4a8ce.apps.googleusercontent.com",
  // 		callback: handleCallbackGoogle,
  // 	});
  // 	window.google?.accounts?.id?.renderButton(
  // 		document.getElementById("loginGoogle"),
  // 		{
  // 			type: "icon",
  // 			theme: "outline",
  // 			size: "large",
  // 		}
  // 	);
  // 	window.google?.accounts?.id?.prompt();
  // }, [window.google?.accounts]);

  const handleCallbackGoogle = async (response) => {
    const user = parseJwt(response.credential);
    // try {
    // 	const data = await axios.post("/api/auth/login", {
    // 		gmail: user.email,
    // 		password: user.sub,
    // 		type: "google",
    // 	});
    // 	toast.success(data?.data?.msg);
    // 	navigate("/");
    // } catch (err) {
    // 	toast.error(err?.response?.data?.msg);
    // }
  };
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
          <h2>Đăng nhập</h2>
          <div className="inputBox">
            {msg["gmail"] && (
              <div style={{ color: "red", margin: "10px 0", fontSize: "14px" }}>
                * <i>{msg["gmail"]}</i>
              </div>
            )}
            <input type="text" ref={emailRef} placeholder="gmail" name="" />
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
              placeholder="password"
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
          <div className="inputBox">
            <input
              onClick={handleLogin}
              type="submit"
              value="Đăng nhập"
              id="btn"
            />
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

export default Login;
