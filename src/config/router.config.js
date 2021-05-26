import Carousel from "../Components/Carousel/Carousel";
import RapChieuPhim from "../Components/RapChieuPhim/RapChieuPhim";
import Admin from "../Pages/Admin/Admin";
import AdminLogin from "../Pages/Admin/AdminLogin";
import ChiTietPhim from "../Pages/ChiTietPhim/ChiTietPhim";
import Brand from "../Pages/Footer/Brand";
import ChinhSachBaoMat from "../Pages/Footer/ChinhSachBaoMat";
import FAQ from "../Pages/Footer/FAQ";
import ThaoThuanSuDung from "../Pages/Footer/ThaoThuanSuDung";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";

export const clientRouter = [
    {
        path: "/admin",
        exact: true,
        component: Admin
    },

    {
        path: "/admin/login",
        exact: true,
        component: AdminLogin
    },
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/home",
        exact: true,
        component: Home
    },
    {
        path: "/carousel",
        exact: true,
        component: Carousel
    },
    {
        path: "/login",
        exact: true,
        component: Login
    },
    {
        path: "/rapchieuphim",
        exact: true,
        component: RapChieuPhim
    },
    {
        path: "/chitietphim/:maPhim",
        exact: true,
        component: ChiTietPhim
    },
    {
        path: "/brand",
        exact: true,
        component: Brand
    },
    {
        path: "/noidung/thoathuan",
        exact: true,
        component: ThaoThuanSuDung
    },
    {
        path: "/noidung/baomat",
        exact: true,
        component: ChinhSachBaoMat
    },
    {
        path: "/noidung/faq",
        exact: true,
        component: FAQ
    },
    {
        path: "*",
        exact: true,
        component: PageNotFound
    },
    
  
]