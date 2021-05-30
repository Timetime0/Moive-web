import Axios from "axios";
import {BASE_URL} from '../../Utils/Constants/settingSystem'

// lấy danh sách cụm rạp
export function DataDanhSachRap(){
    return Axios({
        method:"GET",
        url: `${BASE_URL}/api/QuanLyRap/LayThongTinHeThongRap`
    })
}

// lấy danh sách cụm rạp theo hệ thống
export function DataThongTinCumRapTheoHeThong(heThongRap){
    return Axios({
        method:'GET',
        url:`${BASE_URL}/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${heThongRap}`
    })
}
// lấy danh sách lịch chiếu theo hệ thống rạp
export function DataThongTinLichChieuTheoHeThongRap(heThongRap){
    return Axios({
        method:'GET',
        url:`${BASE_URL}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${heThongRap}`
    })
}

// lấy danh sách lịch chiếu theo mã phim
export function DataThongTinLichChieuTheoPhim(maPhim){
        return Axios({
            method:'GET',
            url:`${BASE_URL}/api/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`
    })
}
