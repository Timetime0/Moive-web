import Axios from "axios";
import { BASE_URL } from "../../Utils/Constants/settingSystem";

// Lay danh sach nguoi dung
export function getDataNguoiDung() {
  return Axios({
    method: "GET",
    url: `${BASE_URL}/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`,
  });
}

export function getDataNguoiDungPhanTrang(soTrang, soPhanTuTrang) {
  return Axios({
    method: "GET",
    url: `${BASE_URL}/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTuTrang}`,
  });
}

//Xoa nguoi dung
export function deleteDataNguoiDung(taiKhoan) {
  const admin = JSON.parse(localStorage.getItem("admin"));
  return Axios({
    method: "DELETE",
    url: `${BASE_URL}/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,

    headers: {
      Authorization: `Bearer ${admin.accessToken}`,
    },
  });
}

//Them nguoi dung
export function addDataNguoiDung(user) {
  const admin = JSON.parse(localStorage.getItem("admin"));
  return Axios({
    method: "POST",
    url: `${BASE_URL}/api/QuanLyNguoiDung/ThemNguoiDung`,
    data: user,
    headers: {
      Authorization: `Bearer ${admin.accessToken}`,
    },
  });
}

// Cập nhật người dùng
export function updateDataNguoiDung(user) {
  const admin = JSON.parse(localStorage.getItem("admin"));
  return Axios({
    method: "PUT",
    url: `${BASE_URL}/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
    data: user,
    headers: {
      Authorization: `Bearer ${admin.accessToken}`,
    },
  });
}

//Tim Kiem nguoi Dung
export function findDataNguoiDung(tuKhoa) {
  return Axios({
    method: "GET",
    url: `${BASE_URL}/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${tuKhoa}`,
  });
}

export function findDataNguoiDungTheoTrang(tuKhoa, soTrang, soPhanTuTrang) {
  return Axios({
    method: "GET",
    url: `${BASE_URL}/api/QuanLyNguoiDung/TimKiemNguoiDungPhanTrang?MaNhom=GP01&tuKhoa=${tuKhoa}&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTuTrang}`,
  });
}

// Dang Nhap
export function loginNguoiDung(user) {
  return Axios({
    method: "POST",
    url: `${BASE_URL}/api/QuanLyNguoiDung/DangNhap`,
    data: user,
  });
}

// Đăng ký
export function dangKyNguoiDung(user) {
  return Axios({
    method: "POST",
    url: `${BASE_URL}/api/QuanLyNguoiDung/DangKy`,
    data: user,
  });
}

// Thông tin người dùng
export function thongTinClient(taiKhoan) {
  return Axios({
    method: "POST",
    url: `${BASE_URL}/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
    data: taiKhoan,
  });
}
