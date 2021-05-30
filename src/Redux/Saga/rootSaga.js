import { all } from "@redux-saga/core/effects";
import * as dataPhimSaga from './dataPhimSaga'
import * as dataRapPhimSaga from './dataRapPhimSaga'
import * as quanLyNguoiDungSaga from './Admin/quanLyNguoiDungSaga'
import * as authSaga from './authSaga'
import * as quanLyDatVeSaga from './Admin/quanLyDatVeSaga'

//genderater functio => cấu hình saga
export function * rootSaga(){
    yield all([
        dataPhimSaga.theoDoiActionGetDataChiTietPhimApi(),     
        dataPhimSaga.theoDoiActionGetDataApi(),
        dataPhimSaga.theoDoiActionGetDataPhimTheoTrangApi(),
        dataPhimSaga.theoDoiActionDeleteDataPhimApi(),
        dataPhimSaga.theoDoiActionUpdateImgDataPhimApi(),
        dataPhimSaga.theoDoiActionAddImgPhimApi(),

        dataRapPhimSaga.theoDoiAcTionGetDataRapPhimApi(),
        dataRapPhimSaga.theoDoiActionGetDataCumRapPhimApi(),
        dataRapPhimSaga.theoDoiActionGetDataThongTinLichChieuTheoHeThong(),
        dataRapPhimSaga.theoDoiActionGetDataThongTinLichChieuTheoMaPhim(),

        quanLyNguoiDungSaga.theoDoiActionGetDataNguoiDungApi(),
        quanLyNguoiDungSaga.theoDoiActionGetDataNguoiDungTheoTrangApi(),
        quanLyNguoiDungSaga.theoDoiActionFindDataNguoiDungTheoTrangApi(),    
        quanLyNguoiDungSaga.theoDoiActionFindDataNguoiDungApi(),     
        quanLyNguoiDungSaga.theoDoiActionDeleteNguoiDungApi(),    
        quanLyNguoiDungSaga.theoDoiActionAddNguoiDungApi(),    
        quanLyNguoiDungSaga.theoDoiActionUpdateNguoiDungApi(),    
        quanLyNguoiDungSaga.theoDoiActionGetIn4Client(),    

        authSaga.theoDoiActionLoginNguoiDung(),
        authSaga.theoDoiActionSignUpNguoiDung(),
        authSaga.theoDoiActionLoginKhanhHang(),

        quanLyDatVeSaga.theoDoiActionGetDataPhongVe(),
        quanLyDatVeSaga.theoDoiActionBookingTicketForClient(),


    ])
}