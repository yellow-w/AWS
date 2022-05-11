const initialState = {
    number: 0,
    loadding: false,
    error: null
}

const UP = 'COUNTER/UP_REQUEST' // 실제 number에 +1이 아닌 요청
const DOWN = 'COUNTER/DOWN_REQUEST'

export const up = (payload) => ({type:UP, payload})
export const down = (payload) => ({type:DOWN, payload})

const counter = (state = initialState, action) => {
    console.log('reducer')
    switch(action.type){
        case 'COUNTER/UP_REQUEST':
            return {
                ...state,
                loadding: true,
                error: null
            }
        case 'COUNTER/UP_SUCCESS':
            return {
                ...state,
                loadding: false,
                number: state.number+1
            }

        case 'COUNTER/UP_FAILURE':
            return {
                ...state,
                loadding: false,
                error: '접속 에러 같음!'
            }
        case 'COUNTER/DOWN_REQUEST':
            return {
                ...state,
                loadding: true,
                error: true
            }
        case 'COUNTER/DOWN_SUCCESS':
            return {
                ...state,
                loadding: false,
                number: state.number-1
            }
        case 'COUNTER/DOWN_REQUEST':
            return {
                ...state,
                loadding: true,
                error: '접속 에러 같음!'
            }
        
        default: 
            return state
    }
}

export default counter