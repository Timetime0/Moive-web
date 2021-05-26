import { FIND_DATA_NGUOIDUNG, FIND_DATA_NGUOIDUNG_THEOTRANG, GET_DATA_NGUOIDUNG_THEOTRANG, GET_LENGTH_DATA_NGUOIDUNG } from "../../Types/Admin/quanLyNguoiDungType"

const initialState = {
    soLuongUser:0,
    soTrang:0,
    soPhanTuTrang:20,
    soPhanTuTrangTimKiem:20,
    danhSach: {},
    danhSachTimKiem: {},
}

const arrDataNguoiDungReducer = (state = initialState, { type, payload,soPhanTuTrang }) => {
    switch (type) {

    case GET_LENGTH_DATA_NGUOIDUNG:{
        state.soLuongUser = payload
        state.soTrang = (payload/state.soPhanTuTrang).toFixed()*1
        return { ...state }
    }

    case GET_DATA_NGUOIDUNG_THEOTRANG:{
        state.soPhanTuTrang = soPhanTuTrang
        state.danhSach = payload
        return { ...state }
    }

    case FIND_DATA_NGUOIDUNG_THEOTRANG:{
        console.log(payload)
        state.danhSachTimKiem = payload
        state.soPhanTuTrangTimKiem = soPhanTuTrang
        state.soPhanTuTrang = soPhanTuTrang
        state.danhSach = payload
        return { ...state }
    }

    case FIND_DATA_NGUOIDUNG:{
        state.soPhanTuTrang = soPhanTuTrang
        state.danhSach.items = payload
        return { ...state }
    }

    

    default: {return state}
        
    }
}

export default arrDataNguoiDungReducer