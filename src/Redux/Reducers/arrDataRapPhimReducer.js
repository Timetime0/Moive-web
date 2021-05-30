import { DELETE_DATA_LICHCHIEU_MAPHIM, GET_DATA_CUM_THEATER, GET_DATA_LICHCHIEU_HETHONG, GET_DATA_LICHCHIEU_MAPHIM, GET_INFOR_THEATER, RENDER_CHITIET_RAP} from "../Types/dataRapPhim"

const initialState = {
    arrData : [],
    arrCumRap : [],
    renderGiaoDien :{
      logo:[], // auto BHDStar
      chiTiet:[],
    },
    lichChieuMaPhim: {},
    lichChieuHeThong: {},
    dataByMaPhim:{},

}

export const arrDataRapPhimReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INFOR_THEATER:{
            state.arrData = action.data
            state.renderGiaoDien.logo = action.dataRender
            state.renderGiaoDien.chiTiet = action.dataChiTietRap[0]
            return {...state}
        }

        case GET_DATA_CUM_THEATER:{
            state.arrCumRap = action.data
            return {...state}
        }

        case RENDER_CHITIET_RAP:{
            state.renderGiaoDien.chiTiet = action.chiTiet
            state.renderGiaoDien.logo = action.logo
            return {...state}
        }
        case GET_DATA_LICHCHIEU_MAPHIM:{
            state.dataByMaPhim = action.data
            if( action.data){
                const newObj = action.data.heThongRapChieu
                const newHeThongRap =newObj?.filter(arr=>arr.maHeThongRap === action.maHeThongRap)
                state.lichChieuMaPhim = {...state.lichChieuMaPhim, heThongRapChieu:newHeThongRap} 
            }     
            return {...state}
        }
        case DELETE_DATA_LICHCHIEU_MAPHIM:{
            state.dataByMaPhim = ''
            return {...state}
        }


    default:{return state}
    }
}
