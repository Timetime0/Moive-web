import { LOGIN_ADMIN, LOGOUT_ADMIN } from "../../Types/auth-type"

const initialState = {
    user:{
        client:"",
        admin:"",
    }
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


    default: {return state}
        
    }
}


export default userReducer