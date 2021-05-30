import { GET_IN4_CLIENT } from "../../Types/Admin/quanLyNguoiDungType"
import { HIDE_MODAL, LOGIN_ADMIN, LOGIN_USER, LOGOUT_ADMIN, LOGOUT_USER, SHOW_MODAL } from "../../Types/auth-type"

const initialState = {
    user:{
        client:"",
        admin:"",
        in4Client:"",
    },
    showModal:true,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_ADMIN:{
            state.user.admin = action.data
            return {...state}
        }
        case LOGOUT_ADMIN:{
            state.user.admin = ""
            return {...state}
        }
        case LOGIN_USER:{
            state.user.client = action.data
            return {...state}
        }
        case LOGOUT_USER:{
            state.user.client = ""
            return {...state}
        }
        case SHOW_MODAL:{
            state.showModal = true
            return {...state}
        }
        case HIDE_MODAL:{
            state.showModal = false
            return {...state}
        }
        case GET_IN4_CLIENT:{
            console.log(action.data)
            state.user.in4Client = action.data
            return {...state}
        }

    default: {return state}
        
    }
}


export default userReducer