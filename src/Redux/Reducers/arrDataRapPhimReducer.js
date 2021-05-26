import { GET_DATA_CUM_THEATER, GET_INFOR_THEATER, RENDER_CHITIET_RAP} from "../Types/dataRapPhim"

const initialState = {
    arrData : [],
    arrCumRap : [],
    renderGiaoDien :{
      logo:[], // auto BHDStar
      chiTiet:[],
    },
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

    default:{return state}
    }
}
