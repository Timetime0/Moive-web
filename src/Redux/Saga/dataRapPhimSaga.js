import { call, put,  takeEvery,takeLatest  } from "@redux-saga/core/effects";
import { DataDanhSachRap, DataThongTinCumRapTheoHeThong } from "../../Services/QuanLyRap/QuanLyRap";
import { GET_DATA_CUM_THEATER, GET_DATA_CUM_THEATER_SAGA, GET_INFOR_THEATER, GET_INFOR_THEATER_SAGA} from "../Types/dataRapPhim";

// Lay danh sach rap phim
function * getDataRapPhim (action){
    try{
        let result = yield call(()=>{
            return DataDanhSachRap()
        })
        let resultData = yield call(()=>{
            return DataThongTinCumRapTheoHeThong(result.data[0].maHeThongRap)
        })

        yield put({
            type:GET_INFOR_THEATER,
            data:result.data,
            dataRender:result.data[0].logo,
            dataChiTietRap:resultData.data
        })
    }catch(err){
        console.log(err.response.data)
    }
}

export function * theoDoiAcTionGetDataRapPhimApi(){
    yield takeEvery(GET_INFOR_THEATER_SAGA, getDataRapPhim)
}


// lay danh sach cum rap phim
function * getCumRapPhim (action){
    try{
        let result = yield call(()=>{
            return DataThongTinCumRapTheoHeThong(action.maHeThong)
        })

        yield put({
            type:GET_DATA_CUM_THEATER,
            data:result.data,
        })

    }catch(err){
        console.log(err.response.data)
    }
}

export function * theoDoiActionGetDataCumRapPhimApi(){
    yield takeLatest  (GET_DATA_CUM_THEATER_SAGA, getCumRapPhim)
}

//




