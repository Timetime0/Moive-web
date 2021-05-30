import {applyMiddleware, combineReducers, createStore, compose } from 'redux'
import {arrNewPhimReducer} from './Reducers/arrNewPhimReducer'
import {arrDataPhimReducer} from './Reducers/arrDataPhimReducer'
import {waitingReducer} from './Reducers/waitingReducer'
import {arrDataRapPhimReducer} from './Reducers/arrDataRapPhimReducer'
import {arrTinTucReducer} from './Reducers/arrTinTucReducer'
//middleware saga
import createMiddleWareSaga from 'redux-saga'
import { rootSaga } from './Saga/rootSaga';
import {arrDataChiTetPhimReducer} from './Reducers/arrDataChiTetPhimReducer'
import arrDataNguoiDungReducer from './Reducers/Admin/arrDataNguoiDungReducer'
import userReducer from './Reducers/Login/userReducer'
import arrDataPhongVeReducer from './Reducers/Admin/arrDataPhongVeReducer'
const middleWareSaga = createMiddleWareSaga();


const rootReducer = combineReducers({
    arrNewPhimReducer,
    arrDataPhimReducer,
    waitingReducer,
    arrDataRapPhimReducer,
    arrTinTucReducer,
    arrDataChiTetPhimReducer,
    arrDataNguoiDungReducer,
    userReducer,
    arrDataPhongVeReducer,
    
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers( applyMiddleware(middleWareSaga)))

middleWareSaga.run(rootSaga)

export default store
