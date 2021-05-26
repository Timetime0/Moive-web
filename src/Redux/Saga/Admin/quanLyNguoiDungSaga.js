import { delay, call, put, takeLatest } from 'redux-saga/effects'
import { GET_DATA_NGUOIDUNG_SAGA, GET_DATA_NGUOIDUNG_THEOTRANG_SAGA, GET_LENGTH_DATA_NGUOIDUNG, GET_DATA_NGUOIDUNG_THEOTRANG, FIND_DATA_NGUOIDUNG_THEOTRANG, FIND_DATA_NGUOIDUNG_THEOTRANG_SAGA, FIND_DATA_NGUOIDUNG, FIND_DATA_NGUOIDUNG_SAGA, DELETE_NGUOIDUNG_SAGA, ADD_NGUOIDUNG_SAGA, UPDATE_NGUOIDUNG_SAGA } from '../../Types/Admin/quanLyNguoiDungType'
import {addDataNguoiDung, deleteDataNguoiDung, findDataNguoiDung, findDataNguoiDungTheoTrang, getDataNguoiDung, getDataNguoiDungPhanTrang, updateDataNguoiDung} from '../../../Services/QuanLyNguoiDung/QuanLyNguoiDung'
import { DISPLAY_WAITING, HIDDEN_WAITING } from '../../Types/waitingType'
import Swal from 'sweetalert2'


function* getDataNguoiDungApi(action){
    yield put({
        type: DISPLAY_WAITING
    })

    yield delay(1500)

    try{
        let result = yield call(()=>{
            return getDataNguoiDung()
        })

        yield put({
            type: GET_LENGTH_DATA_NGUOIDUNG,
            payload: result.data.length
        })
    }catch(err){
        console.log(err)
    }

    yield put({
        type: HIDDEN_WAITING
    })
}

export function* theoDoiActionGetDataNguoiDungApi() {
    yield takeLatest(GET_DATA_NGUOIDUNG_SAGA, getDataNguoiDungApi)
}


function* getDataNguoiDungTheoTrangApi(action){
    try{
        let result = yield call(()=>{
            return getDataNguoiDungPhanTrang(action.soTrang, action.soPhanTuTrang)
        })

        yield put({
            type: GET_DATA_NGUOIDUNG_THEOTRANG,
            payload: result.data,
            soPhanTuTrang:action.soPhanTuTrang,
        })
    }
    catch(err){
        console.log(err)
    }
}

export function* theoDoiActionGetDataNguoiDungTheoTrangApi() {
    yield takeLatest(GET_DATA_NGUOIDUNG_THEOTRANG_SAGA, getDataNguoiDungTheoTrangApi)
}


function* findDataNguoiDungTheoTrangApi(action){
    try{
        let result = yield call(()=>{
            return findDataNguoiDungTheoTrang(action.tuKhoa ,action.soTrang, action.soPhanTuTrang)
        })

        yield put({
            type: FIND_DATA_NGUOIDUNG_THEOTRANG,
            payload: result.data,
            soPhanTuTrang:action.soPhanTuTrang,
        })
    }
    catch(err){
        console.log(err)
    }
}

export function* theoDoiActionFindDataNguoiDungTheoTrangApi() {
    yield takeLatest(FIND_DATA_NGUOIDUNG_THEOTRANG_SAGA, findDataNguoiDungTheoTrangApi)
}

function* findDataNguoiDungApi(action){
    try{
        let result = yield call(()=>{
            return findDataNguoiDung(action.tuKhoa)
        })

        yield put({
            type: FIND_DATA_NGUOIDUNG,
            payload: result.data,
        })
    }
    catch(err){
        console.log(err)
    }
}

export function* theoDoiActionFindDataNguoiDungApi() {
    yield takeLatest(FIND_DATA_NGUOIDUNG_SAGA, findDataNguoiDungApi)
}

function* deleteUserApi(action){
    try{
        let result = yield call(()=>{
            return deleteDataNguoiDung(action.taiKhoan)
        })
        if(result.status === 200){
            Swal.fire({
                icon: 'success',
                title:'Đã xóa',
            })
        }
        
    }catch(err){
        console.log(err.response.data)
        Swal.fire({
            icon: 'error',
            title: `${err.response.data}`,
        })
    }
}

export function* theoDoiActionDeleteNguoiDungApi() {
    yield takeLatest(DELETE_NGUOIDUNG_SAGA, deleteUserApi)
}


function* addUserApi(action){
    try{
        let result = yield call(()=>{
            return addDataNguoiDung(action.nguoiDung)
        })
        console.log(result)
        if(result.status === 200){
            Swal.fire({
                icon: 'success',
                title:'Thêm người dùng',
                html: `
                <div className="text-left"><span className="font-weight">Tài khoản:</span> ${action.nguoiDung.taiKhoan} </div>
                <div className="text-left"><span className="font-weight">Mật Khẩu:</span> ${action.nguoiDung.matKhau}</div>
                <div className="text-left"><span className="font-weight">Email: </span>${action.nguoiDung.email} </div>
                <div className="text-left"><span className="font-weight">Số điện thoai:</span> ${action.nguoiDung.soDt} </div>
                <div className="text-left"><span className="font-weight">Mã nhóm:</span> ${action.nguoiDung.maNhom}</div>
                <div className="text-left"><span className="font-weight">Mã loại người dùng:</span> ${action.nguoiDung.maLoaiNguoiDung}</div>
                <div className="text-left"><span className="font-weight">Họ Tên: </span>${action.nguoiDung.hoTen}</div>
                `
            })
        }
    }catch(err){
        console.log(err.response.data)
        Swal.fire({
            icon: 'error',
            title: `Thất bại`,
            text: `${err.response.data}`
        })
    }
}

export function* theoDoiActionAddNguoiDungApi() {
    yield takeLatest(ADD_NGUOIDUNG_SAGA, addUserApi)
}

function* updateUserApi(action){
    console.log(action.nguoiDung)
    try{
        let result = yield call(()=>{
            return updateDataNguoiDung(action.nguoiDung)
        })
        console.log(result)
        if(result.status === 200){
            Swal.fire({
                icon: 'success',
                title:'Cập nhật người dùng',
                html: `
                <div className="text-left"><span className="font-weight">Tài khoản:</span> ${action.nguoiDung.taiKhoan} </div>
                <div className="text-left"><span className="font-weight">Mật Khẩu:</span> ${action.nguoiDung.matKhau}</div>
                <div className="text-left"><span className="font-weight">Email: </span>${action.nguoiDung.email} </div>
                <div className="text-left"><span className="font-weight">Số điện thoai:</span> ${action.nguoiDung.soDt} </div>
                <div className="text-left"><span className="font-weight">Mã nhóm:</span> ${action.nguoiDung.maNhom}</div>
                <div className="text-left"><span className="font-weight">Mã loại người dùng:</span> ${action.nguoiDung.maLoaiNguoiDung}</div>
                <div className="text-left"><span className="font-weight">Họ Tên: </span>${action.nguoiDung.hoTen}</div>
                `
            })
        }
    }catch(err){
        console.log(err.response.data)
        Swal.fire({
            icon: 'error',
            title: `Thất bại`,
            text: `${err.response.data}`
        })
    }
}

export function* theoDoiActionUpdateNguoiDungApi() {
    yield takeLatest(UPDATE_NGUOIDUNG_SAGA, updateUserApi)
}