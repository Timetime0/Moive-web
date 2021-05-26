import { CHANGE_CHITIET_PHIM } from "../Types/objectPhimType"

export const changeChitietPhim = (phim) => {
    return{
        type:CHANGE_CHITIET_PHIM,
        phim,
    }
}