import { delay, takeEvery, call, put, takeLatest } from 'redux-saga/effects'
import { AddImgPhim, UpdateImgPhim, DataDanhSachPhim, DataDanhSachPhimTheoTrang, LayThongTinPhimBangMaPhim, UpdatePhim, XoaPhimBangMaPhim } from "../../Services/QuanLyPhim/QuanLyPhim"
import { DELETE_PHIM_SAGA, GET_DATA_PHIM_THEOTRANG, GET_DATA_PHIM_THEOTRANG_SAGA,ADD_IMG_PHIM_SAGA, UPDATE_IMG_PHIM_SAGA, UPDATE_PHIM_SAGA } from '../Types/Admin/quanLyPhimType'
import { GET_DATA_CHITIETPHIM, GET_DATA_CHITIETPHIM_SAGA, GET_DATA_PHIM, GET_DATA_PHIM_SAGA } from "../Types/DataPhimType"
import { DISPLAY_WAITING, HIDDEN_WAITING } from '../Types/waitingType'
import Swal from 'sweetalert2'

function* getDataPhimAPI(action) {

    yield put({
        type: DISPLAY_WAITING
    })
    yield delay(500)
    try {
        let result = yield call(() => {
            return DataDanhSachPhim()
        })
        yield put({
            type: GET_DATA_PHIM,
            data: result.data,
            dataChiTiet: result.data[0],
        })

    } catch (err) {
        console.log(err.response.data)
    }

    yield put({
        type: HIDDEN_WAITING
    })
}

export function* theoDoiActionGetDataApi() {
    yield takeEvery(GET_DATA_PHIM_SAGA, getDataPhimAPI)
}


function* getDataChiTietPhimAPI(action){
    const {maPhim} = action
    yield put({
        type: DISPLAY_WAITING
    })
    try{
        let result = yield call(()=>{
            return LayThongTinPhimBangMaPhim(maPhim)
        })
        yield put({
            type:GET_DATA_CHITIETPHIM,
            data:result.data,
        })
    }catch(err){
        console.log(err.response.data)
    }

    yield put({
        type: HIDDEN_WAITING
    })
}

export function* theoDoiActionGetDataChiTietPhimApi() {
    yield takeEvery(GET_DATA_CHITIETPHIM_SAGA, getDataChiTietPhimAPI)
}


function* getDataPhimTheoTrang(action){
    yield put({
        type: DISPLAY_WAITING
    })

    try{
        let res = yield call(()=>{
            return DataDanhSachPhimTheoTrang(action.soTrang,action.soPhanTuTrang)
        })
        yield put({
            type:GET_DATA_PHIM_THEOTRANG,
            payload:res.data,
            soPhanTuTrang:action.soPhanTuTrang
        })

    }catch(err){
        console.log(err)
    }


    yield put({
        type: HIDDEN_WAITING
    })

}

export function* theoDoiActionGetDataPhimTheoTrangApi() {
    yield takeLatest(GET_DATA_PHIM_THEOTRANG_SAGA, getDataPhimTheoTrang)
}



// xóa phim
function* deteleDataPhim(action){
    try{
        let res = yield call(()=>{
            return XoaPhimBangMaPhim(action.maPhim)
        })
        if(res.status === 200){
            Swal.fire({
                icon: 'success',
                title:'Đã xóa',
            })
        }

    }catch(err){
        console.log(err)
        Swal.fire({
            icon: 'error',
            title: `${err.response.data}`,
        })
    }
}

export function* theoDoiActionDeleteDataPhimApi() {
    yield takeLatest(DELETE_PHIM_SAGA, deteleDataPhim)
}


// thêm phim


function* addImgDataPhim(action){
    try{
        let form_data = new FormData()
        for(let key in action.phim){
            form_data.append(key,action.phim[key])
        }
        let res = yield call(()=>{
            return AddImgPhim(form_data)
        })
        console.log(res)

        if(res.status === 200){
            Swal.fire({
                icon: 'success',
                title:'Thêm thành công',
            })
        }
    }catch(err){
        console.log(err)
        Swal.fire({
            icon: 'error',
            title: `${err.response.data}`,
        })
    }
}

export function* theoDoiActionAddImgPhimApi() {
    yield takeLatest(ADD_IMG_PHIM_SAGA, addImgDataPhim)
}



// cập nhật  hình ảnh phim
function* updataImgDataPhim(action){
    try{
        let form_data = new FormData()
        for(let key in action.phim){
            form_data.append(key,action.phim[key])
        }

        let res = yield call(()=>{
            return UpdateImgPhim(form_data)
        })
        if(res.status === 200){
            Swal.fire({
                icon: 'success',
                title:'Cập nhật thành công',
            })
        }

    }catch(err){
        console.log(err)
        Swal.fire({
            icon: 'error',
            title: `${err.response.data}`,
        })
    }
}
export function* theoDoiActionUpdateImgDataPhimApi() {
    yield takeLatest(UPDATE_IMG_PHIM_SAGA, updataImgDataPhim)
}

function* updataDataPhim(action){
    try{

        let res = yield call(()=>{
            return UpdatePhim(action.phim)
        })
        if(res.status === 200){
            Swal.fire({
                icon: 'success',
                title:'Cập nhật thành công',
            })
        }

    }catch(err){
        console.log(err)
        Swal.fire({
            icon: 'error',
            title: `${err.response.data}`,
        })
    }
}
export function* theoDoiActionUpdateDataPhimApi() {
    yield takeLatest(UPDATE_PHIM_SAGA, updataDataPhim)
}   