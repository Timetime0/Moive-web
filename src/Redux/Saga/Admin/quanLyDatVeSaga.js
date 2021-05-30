import { call, put, takeLatest } from 'redux-saga/effects'
import Swal from 'sweetalert2'
import { bookingTicket, getDataTicketRoom } from '../../../Services/QuanLyDatVe/QuanLyDatVe'
import { GET_PHONGVE, GET_PHONGVE_SAGA, BOOKING_CHAIR_SAGA , BOOKING_CHAIR} from '../../Types/Admin/quanLyDatVe'

function* getDataPhongVe(action) {
    try {
        const res = yield call(() => {
            return getDataTicketRoom(action.maLichChieu)
        })
        yield put({
            type: GET_PHONGVE,
            data: res.data,
        })

    } catch (err) {
        console.log(err.reponse.data)
    }
}

export function* theoDoiActionGetDataPhongVe() {
    yield takeLatest(GET_PHONGVE_SAGA, getDataPhongVe)
}



function* bookingTicketForClient(action) {
    try {
        const res = yield call(() => {
            return bookingTicket(action.object)
        })
        console.log(res)
        if(res.status ===200){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Đặt vé thành công',
                showConfirmButton: false,
                timer: 1500
              })
            action.history.push('/profile')  
        }

    } catch (err) {
        console.log(err.reponse.data)
    }
}

export function* theoDoiActionBookingTicketForClient() {
    yield takeLatest(BOOKING_CHAIR_SAGA, bookingTicketForClient)
}

