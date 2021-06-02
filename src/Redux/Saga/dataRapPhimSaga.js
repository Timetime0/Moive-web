import { call, put,  takeEvery,takeLatest  } from "@redux-saga/core/effects";
import { DataDanhSachRap, DataThongTinCumRapTheoHeThong, DataThongTinLichChieuTheoHeThongRap, DataThongTinLichChieuTheoPhim } from "../../Services/QuanLyRap/QuanLyRap";
import { GET_DATA_CUM_THEATER, GET_DATA_CUM_THEATER_SAGA, GET_DATA_LICHCHIEU_HETHONG, GET_DATA_LICHCHIEU_HETHONG_SAGA, GET_DATA_LICHCHIEU_MAPHIM, GET_DATA_LICHCHIEU_MAPHIM_SAGA, GET_INFOR_THEATER, GET_INFOR_THEATER_SAGA, GET_DATA_LICHCHIEU_MAPHIM_SAGA_FIND, GET_DATA_LICHCHIEU_MAPHIM_FIND} from "../Types/dataRapPhim";

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

// Lấy thông tin lịch chiếu theo hệ thống rạp
function* getDataThongTinLichChieuTheoHeThong(action){
    try{
        const res = yield call(()=>{
            return DataThongTinLichChieuTheoHeThongRap(action.maHeThongRap)
        })
 
        yield put({
            type:GET_DATA_LICHCHIEU_HETHONG,
            data: res.data
        })
    }catch(err){
        console.log(err.response.data)
    }
 }
 
 export function* theoDoiActionGetDataThongTinLichChieuTheoHeThong(){
     yield takeLatest (GET_DATA_LICHCHIEU_HETHONG_SAGA,getDataThongTinLichChieuTheoHeThong )
 }
 

// lấy thông tin lịch chiếu theo mã phim
function* getDataThongTinLichChieuTheoMaPhim(action){
   try{
       const res = yield call(()=>{
           return DataThongTinLichChieuTheoPhim(action.maPhim)
       })

       yield put({
           type:GET_DATA_LICHCHIEU_MAPHIM,
           data: res.data,
           maHeThongRap: action.maHeThongRap
       })
   }catch(err){
       console.log(err.response.data)
   }
}

export function* theoDoiActionGetDataThongTinLichChieuTheoMaPhim(){
    yield takeLatest (GET_DATA_LICHCHIEU_MAPHIM_SAGA,getDataThongTinLichChieuTheoMaPhim)
}


function* getDataThongTinLichChieuTheoMaPhimByFinding(action){
    try{
        const res = yield call(()=>{
            return DataThongTinLichChieuTheoPhim(action.maPhim)
        })
 
        yield put({
            type:GET_DATA_LICHCHIEU_MAPHIM_FIND,
            data: res.data,
        })
    }catch(err){
        console.log(err.response.data)
    }
 }
 
 export function* theoDoiActionGetDataThongTinLichChieuTheoMaPhimFind(){
     yield takeLatest (GET_DATA_LICHCHIEU_MAPHIM_SAGA_FIND,getDataThongTinLichChieuTheoMaPhimByFinding)
 }
 



 
 







// lấy thông tin lịch chiếu theo hệ thống rạp
function* getDataLichChieuTheoHeThongRap(action){
    try{
        const res = yield call(()=>{
            return DataThongTinLichChieuTheoHeThongRap(action.maHeThongRap)
        })
        yield put({
            type:GET_DATA_LICHCHIEU_HETHONG,
            data: res.data,
        }) 
    }catch(err){
        console.log(err.response.data)
    }
}

export function* theoDoiActionGetDataThongTinLichChieuTheoHeThongRap(){
    yield takeLatest (GET_DATA_LICHCHIEU_HETHONG_SAGA,getDataLichChieuTheoHeThongRap)
}
