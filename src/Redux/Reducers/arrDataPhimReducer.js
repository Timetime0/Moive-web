import { FIND_PHIM, GET_DATA_PHIM_THEOTRANG } from "../Types/Admin/quanLyPhimType"
import { GET_DATA_PHIM } from "../Types/DataPhimType"
import { CHANGE_CHITIET_PHIM } from "../Types/objectPhimType"

const initialState = {
    arrData: [],
    objectPhim: {},
    danhSachPhimTheoTrang: {},
    soPhanTuTrang:5,
}

export const arrDataPhimReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_PHIM: {
            return { ...state, arrData: action.data, objectPhim: action.dataChiTiet }
        }

        case CHANGE_CHITIET_PHIM: {
            state.objectPhim = action.phim
            return { ...state }
        }

        case GET_DATA_PHIM_THEOTRANG:{
            state.danhSachPhimTheoTrang = action.payload
            state.soPhanTuTrang = action.soPhanTuTrang
            return { ...state }
        }
        case FIND_PHIM:{
            const key = action.key
            const newStr = key.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/\s+/g, ' ').split(" ").join("-");

            let filteredData = state.arrData.filter(value => {
                return (
                    value.biDanh.includes(newStr)
                )
            })

            state.danhSachPhimTheoTrang.items = filteredData

            return { ...state }
        }

        default: { return state }
    }
}

