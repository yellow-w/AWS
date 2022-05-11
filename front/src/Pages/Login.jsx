import { Link } from "react-router-dom"
import AuthLayout, { Footer } from "../Components/auth/AuthLayout"
import { AuthInputBox } from "../Components/form/inputs"
import { StyledButton } from "../Components/form/buttons"
import useForm from '../Hook/useForm'
import validate from '../utils/validate/login'
import { useSelector, useDispatch } from 'react-redux'
import { user_login_request } from "../reducers/user"

const Login = () => {
    
    //총 4가지 state 값 가져오기
    //폼에 대한 state와 submit 했을 때 활성화/비활성화 여부에 대한 state값, 에러에 대한 state, 함수 호출에 대한 state값
    //인자값은 총 3개. 
    //1. 폼에 대한 state. initialState
    //2. submit 함수 내용
    //3. 폼 체크 함수

    const dispatch = useDispatch()

    const initialState = { email: '', password: '' }
    const onSubmit = (payload) => {
        // user_login_request({name:'ingoo'})
        dispatch(user_login_request({...payload}))
    }

    const { email, password, handleSubmit, errors, submit } = useForm(initialState, onSubmit, validate)

    return (
        <>
            <AuthLayout>
                <form onSubmit = { handleSubmit }>
                    <h3>로그인</h3>
                    <AuthInputBox type='text' name='email' {...email} placeholder="아이디를 입력해주세요." />
                    { errors.email && <span>{errors.email}</span>}
                    <br />
                    <AuthInputBox type='password' name='password' {...password} placeholder="패스워드를 입력해주세요." />
                    {errors.password && <span>{errors.password}</span>}
                    <br />
                    <StyledButton fullWidth type="submit" disabled={submit}>로그인</StyledButton>
                </form>
                <Footer >
                    <Link to="/register">회원가입</Link>
                </Footer>
            </AuthLayout>
        </>
    )
}

export default Login