// side effects redux-saga/effects
import { all, fork } from 'redux-saga/effects'
import watchCounterUp from './counterSaga'
import userSaga from './userSaga'

export default function* rootSaga(){
    yield all([
        fork(watchCounterUp),
        fork(userSaga)
    ])
}


// 사이드 이펙트의 특징은 앞에 yield가 붙는다