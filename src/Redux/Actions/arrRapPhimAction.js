import { GET_DATA_CUM_THEATER, RENDER_CHITIET_RAP } from "../Types/dataRapPhim"

export const getDataCumRapPhim = (maHeThong) => {
    return{
        type:GET_DATA_CUM_THEATER,
        maHeThong,
    }
}

export const getRenderChiTietRap = (chiTiet,logo)=>{
    return{
        type:RENDER_CHITIET_RAP,
        chiTiet,
        logo,
    }
}