import Admin from "../admin/Admin";
import Login from "../auth/Login";
import ForgotPassword from "../auth/ForgotPassword";
import Register from "../auth/Register";
import Home from "../home/Home";
import Zalo from "../auth/Zalo";
export const publicRouter = [
  {
    element: Home,
    path: "/",
  },
  {
    element: Login,
    path: "/login",
  },
  {
    element: Register,
    path: "/register",
  },
  {
    element: ForgotPassword,
    path: "/forgot_password",
  },
  {
    element: Zalo,
    path: "/zalo",
  },
  {
    element: Admin,
    path: "/admin/:slug",
  },
];
export const adminRouter = [];
