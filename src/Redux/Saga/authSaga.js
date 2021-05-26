import { call, put, takeLatest } from "@redux-saga/core/effects";
import { loginNguoiDung } from "../../Services/QuanLyNguoiDung/QuanLyNguoiDung";
import { LOGIN_ADMIN, LOGIN_ADMIN_SAGA } from "../Types/auth-type";
import Swal from 'sweetalert2'

function* authDangNhap(action) {

    try {
        let result = yield call(() => {
            return loginNguoiDung(action.user)
        })

        if (result.status === 200){
            if(result.data.maLoaiNguoiDung === "QuanTri"){
                localStorage.setItem("admin", JSON.stringify(result.data))
                Swal.fire({
                    icon: 'success',
                    title: 'Đăng nhập thành công!',
                })
                action.history.push('/admin')
                yield put({
                    type: LOGIN_ADMIN,
                    data: result.data,
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Tài khoản hoặc mật khẩu không chính xác!',
                })
            }
        } 
    } catch (err) {
        console.log(err)
        Swal.fire({
            icon: 'error',
            title: 'Tài khoản hoặc mật khẩu không chính xác!',
        })
    }
}

export function* theoDoiActionLoginNguoiDung() {
    yield takeLatest(LOGIN_ADMIN_SAGA, authDangNhap)
}