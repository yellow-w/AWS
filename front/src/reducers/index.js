import { combineReducers } from "redux";
import counter from './counter'
import user from './user'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persist = {
    key: 'user',    //로컬 스토리지의 키값
    storage,    //저장할 곳 지정
    whitelist: ['user'] //user정보를 가져오겠다
}   //config 객체

const rootReducer = combineReducers({
    counter,
    user
})

export default persistReducer(persist,rootReducer)