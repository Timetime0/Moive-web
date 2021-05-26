import Axios from "axios";
import {BASE_URL} from '../../Utils/Constants/settingSystem'


export function DataDanhSachRap(){
    return Axios({
        method:"GET",
        url: `${BASE_URL}/api/QuanLyRap/LayThongTinHeThongRap`
    })
}



export function DataThongTinCumRapTheoHeThong(heThongRap){
    return Axios({
        method:'GET',
        url:`${BASE_URL}/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${heThongRap}`
    })
}

export function DataThongTinLichChieuTheoHeThongRap(heThongRap){
    return Axios({
        method:'GET',
        url:`${BASE_URL}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${heThongRap}`
    })
}

    export function DataThongTinLichChieuTheoPhim(maPhim){
        return Axios({
            method:'GET',
            url:`${BASE_URL}/api/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`
    })
}
