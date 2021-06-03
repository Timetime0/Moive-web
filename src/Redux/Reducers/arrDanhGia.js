import {ADD_COMMENTS} from '../Types/DanhGiaType'

const initialState = {
    danhGia:[
        {
            maPhim:1314,
            comments:[
                {taiKhoan:'banhbo',noiDung:'Hay',ngayThang:'Wed Jun 02 2021 13:31:23 GMT+0700 (Giờ Đông Dương)'}
            ]
        },
        {
            maPhim:1315,
            comments:[
                {taiKhoan:'banhbo',noiDung:'Hay',ngayThang:'Wed Jun 02 2021 13:31:23 GMT+0700 (Giờ Đông Dương)'}
            ]
        }
    ]
}

const arrDanhGia = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENTS:{
            const newArrDanhGia = [...state.danhGia]
            const index = newArrDanhGia.findIndex((item)=>item.maPhim === +action.maPhim)

            const object = newArrDanhGia.filter((item)=>item.maPhim === +action.maPhim)
            object[0].comments.push(action.object)
            return {...state}
        }
    default:{return state}
    }
}


export default arrDanhGia