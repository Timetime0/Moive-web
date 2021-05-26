import Axios from 'axios'
import {BASE_URL} from '../../Utils/Constants/settingSystem'
/**
    Ngày:16/04
    Người: Nguyễn Như Hoàng Tân
    Lý do: Lấy danh sách phim từ API    
 */


export function DataDanhSachPhim (){
    return Axios({
        method:'GET',
        url:`${BASE_URL}/api/QuanLyPhim/LayDanhSachPhim`
    })
}

export function DataDanhSachPhimTheoTrang (soTrang,soPhanTuTrang){
    return Axios({
        method:'GET',
        url:`${BASE_URL}/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTuTrang}`
    })
}


export function LayThongTinPhimBangMaPhim (maPhim){ // lich chieu, thong tin phim
    return Axios({
        method:'GET',
        url:`${BASE_URL}/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`
    })
}



// Xóa phim
export function XoaPhimBangMaPhim (maPhim){ // lich chieu, thong tin phim
    const admin = JSON.parse(localStorage.getItem('admin'))
    return Axios({
        method:'DELETE',
        url:`${BASE_URL}/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
        headers:{
            Authorization: `bearer ${admin.accessToken}`
        }
    })
}


// thêm hình ảnh phim
export function AddImgPhim (hinhAnh){
    const admin = JSON.parse(localStorage.getItem('admin'))
    return Axios({
        method:'POST',
        url:`${BASE_URL}/api/QuanLyPhim/ThemPhimUploadHinh`,
        data:hinhAnh,
    })
}


// update hình ảnh Phim
export function UpdateImgPhim (phim){
    const admin = JSON.parse(localStorage.getItem('admin'))
    return Axios({
        method:'POST',
        url:`${BASE_URL}/api/QuanLyPhim/CapNhatPhimUpload`,
        data:phim,
        headers:{
            Authorization: `bearer ${admin.accessToken}`
        }
    })
}

// update Phim
export function UpdatePhim (phim){
    const admin = JSON.parse(localStorage.getItem('admin'))
    return Axios({
        method:'POST',
        url:`${BASE_URL}/api/QuanLyPhim/CapNhatPhim`,
        data:phim,
        headers:{
            Authorization: `bearer ${admin.accessToken}`
        }
    })
}


