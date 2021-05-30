import Axios from 'axios'
import {BASE_URL} from '../../Utils/Constants/settingSystem'

// {
//     "maLichChieu": 0,
//     "danhSachVe": [{ "maGhe": 0,  "giaVe": 0}],
//     "taiKhoanNguoiDung": "string"
//   }

// Đặt vé client
export function bookingTicket(object){
    const client = JSON.parse(localStorage.getItem('client'))
    const data = {
        maLichChieu:'',
        danhSachVe:'',
        taiKhoanNguoiDung: client.taiKhoan
    }

    return Axios({
        method:"POST",
        url:`${BASE_URL}/api/QuanLyDatVe/DatVe`,
        headers:{
            Authorization: `bearer ${client.accessToken}`
        },
        data: {...data,maLichChieu: object.maLichChieu,danhSachVe: object.danhSachVe}
    })
}


// Lấy Danh Sách phòng vé
export function getDataTicketRoom(maLichChieu){
    return Axios({
        method:"GET",
        url:`${BASE_URL}/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    })
}

// Tạo lịch chiếu
// {"maPhim": 0,"ngayChieuGioChieu": "string","maRap": 0,"giaVe": 0}
export function createShowtimes(object){
    const admin = JSON.parse(localStorage.getItem('admin'))
    return Axios({
        method:"POST",
        url:`${BASE_URL}/api/QuanLyDatVe/TaoLichChieu`,
        data:object,
        headers:{
            Authorization: `bearer ${admin.accessToken}`
        }
    })
}

