import { CHOICE_GHE, DELETE_GHE, GET_PHONGVE } from "../../Types/Admin/quanLyDatVe"

const initialState = {
    thongTinPhim: '',
    danhSachGhe: '',
}

const arrDataPhongVeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PHONGVE: {
            state.danhSachGhe = action.data.danhSachGhe
            state.thongTinPhim = action.data.thongTinPhim
            return { ...state }
        }

        case CHOICE_GHE: {
            const { maGhe } = action
            const index = state.danhSachGhe.findIndex((item) => item.maGhe === maGhe)

            if (index !== -1) {
                let oldChair = state.danhSachGhe[index]
                let newChair = { ...oldChair, dangChon:!oldChair.dangChon}
                state.danhSachGhe[index] = newChair
            }
            return { ...state }
        }

        case DELETE_GHE:{
            const { maGhe } = action
            const index = state.danhSachGhe.findIndex((item) => item.maGhe === maGhe)
            if (index !== -1) {
                let oldChair = state.danhSachGhe[index]
                let newChair = { ...oldChair, dangChon:false}
                state.danhSachGhe[index] = newChair
            }
            return { ...state }
        }

        default: { return state }
    }
}
export default arrDataPhongVeReducer