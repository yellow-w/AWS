import Responsive from "../Components/common/Responsive"
import { useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import {up,down} from "../reducers/counter"

const Counter = () => {
    const dispatch = useDispatch()
    const counter = useSelector( (state) => state.counter )

    const onUp = useCallback(()=>{ dispatch(up()) },[dispatch]) //공식이니 외우자
    const onDown = useCallback(()=>{ dispatch(down()) },[dispatch]) //공식이니 외우자

    return (
        <Responsive>
            <h1> Counter : {counter.number}</h1>

            {/* <button onClick={()=>dispatch(up())}>+1</button>
            <button onClick={()=>dispatch(down())}>-1</button> */}

            {
                counter.loadding
                ? '로딩중입니다'
                : <>
                    <button onClick={onUp}>+1</button>
                    <button onClick={onDown}>+1</button>
                </>
            }
            <br />
        {counter.error}
        </Responsive>
    )
}

export default Counter