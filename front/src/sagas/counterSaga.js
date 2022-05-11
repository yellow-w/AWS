import { takeLatest, call, put } from 'redux-saga/effects'
// takeLatest 마지막 꺼 하나만 추적(요청 관련된 것들)
// takeEvery 클릭할 때마다 추적(카운터 같은 것들)
// put 디스패치와 같다
import axios from 'axios'

async function upAPI(payload){
    console.log(payload)
    // return await axios.post('http://localhost:3500', payload)
    return new Promise( (res,rej)=> {
        setTimeout( ()=>{
            res(true)
        },1000)
    })
}

async function downAPI(payload){
    return new Promise( (res,rej) => {
        setTimeout( ()=> {
            res(true)
        },1000)
    })
}


// take 메서드로 호출된 함수는 인자값(action)값을 던짐
function* countUp(action){
    console.log('saga')
    //API 내용 작성
    try{
        // 인자값이 2개(함수명,1번의 함수에 대한 인자값)
        const result = yield call(upAPI,action.payload) //동기형태의 함수
        // dispatch 성공에 대한 프로세스
        yield put({
            type: 'COUNTER/UP_SUCCESS'
        })
    } catch (e){
        // displatch 실패에 대한 프로세스
        yield put({
            type:'COUNTER/UP_FAILURE'
        })
    }
}


function* countDown(action) {
    try {
        const result = yield call(downAPI, action.payload)
        yield put({
            type: 'COUNTER/DOWN_SUCCESS'
        })
    } catch (e) {
        yield put({
            type: 'COUNTER/DOWN_FAILURE'
        })
    }
}


// action 값{ type: 'UP' } 추적이 목적인 함수
export default function* watchCounterUp(){
    // take 인자값이 2개
    // 1개는 action.type의 값
    // type이 추적될 시 실행할 함수(*함수)명 적기
    yield takeLatest('COUNTER/UP_REQUEST',countUp)
    yield takeLatest('COUNTER/DOWN_REQUEST',countDown)
}





