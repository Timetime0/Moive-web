import { lazy } from "react";
const RapChieuPhim = lazy(() =>
  import("../Components/RapChieuPhim/RapChieuPhim")
);
const Admin = lazy(() => import("../Pages/Admin/Admin"));
const AdminLogin = lazy(() => import("../Pages/Admin/AdminLogin"));
const Booking = lazy(() => import("../Pages/ChiTietPhim/Booking"));
const ChiTietPhim = lazy(() => import("../Pages/ChiTietPhim/ChiTietPhim"));
const Brand = lazy(() => import("../Pages/Footer/Brand"));
const ChinhSachBaoMat = lazy(() => import("../Pages/Footer/ChinhSachBaoMat"));
const FAQ = lazy(() => import("../Pages/Footer/FAQ"));
const ThaoThuanSuDung = lazy(() => import("../Pages/Footer/ThaoThuanSuDung"));
const Home = lazy(() => import("../Pages/Home/Home"));
const Login = lazy(() => import("../Pages/Login/Login"));
const PageNotFound = lazy(() => import("../Pages/PageNotFound/PageNotFound"));
const UserProfile = lazy(() => import("../Pages/User/UserProfile"));
const Carousel = lazy(() => import("../Components/Carousel/Carousel"));


export const clientRouter = [
  {
    path: "/admin",
    exact: true,
    component: Admin,
  },

  {
    path: "/admin/login",
    exact: true,
    component: AdminLogin,
  },
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/home",
    exact: true,
    component: Home,
  },
  {
    path: "/carousel",
    exact: true,
    component: Carousel,
  },
  {
    path: "/login",
    exact: true,
    component: Login,
  },
  {
    path: "/profile",
    exact: true,
    component: UserProfile,
  },
  {
    path: "/rapchieuphim",
    exact: true,
    component: RapChieuPhim,
  },
  {
    path: "/chitietphim/:maPhim",
    exact: true,
    component: ChiTietPhim,
  },
  {
    path: "/booking/:maLichChieu",
    exact: true,
    component: Booking,
  },
  {
    path: "/brand",
    exact: true,
    component: Brand,
  },
  {
    path: "/noidung/thoathuan",
    exact: true,
    component: ThaoThuanSuDung,
  },
  {
    path: "/noidung/baomat",
    exact: true,
    component: ChinhSachBaoMat,
  },
  {
    path: "/noidung/faq",
    exact: true,
    component: FAQ,
  },
  {
    path: "*",
    exact: true,
    component: PageNotFound,
  },
];
