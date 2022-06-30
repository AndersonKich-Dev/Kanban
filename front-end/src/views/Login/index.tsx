import { FormEvent, useEffect, useState } from 'react'
import * as S from './styles'
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from '../../services/api'

export function Login() {

    const [name, setName] = useState('')
    const [type, setType] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [company, setCompany] = useState('')
    const [confirmPassword, setComfirmPassword] = useState('')
    const [loginForm, setLoginForm] = useState(true)

    const history = useNavigate()

    useEffect(()=>{
        console.log(type)
    },[type])

    async function handleLogin(e:FormEvent) {
        e.preventDefault();

        const data={
            email,
            password,
        } 

        try{
            const response = await api.post('/signin', data)
            localStorage.setItem('id', response.data.id)
            localStorage.setItem('token',`bearer ${ response.data.token}`);
            history("/app/dashboard", { replace: true })
        }
        catch(err:any) {
            toast.error(`${err.response.data}`, { theme: "colored" })
        }

    }

    async function handleRegister(e:FormEvent) {
        e.preventDefault()

        const data = {
            name,
            type,
            email,
            company,
            password,
            confirmPassword
        }
        
        try{
            await api.post("/signup", data)
            setLoginForm(true)
            toast.success('Registrado com sucesso!', { theme: "colored" })
        }
        catch(err:any) {
            toast.error(`${err.response.data}`, { theme: "colored" })
        }
    }

    return (
        <S.Container>
            <div className='login'>
                <h1>{!loginForm ? 'Register' : 'Login'}</h1>
                <form onSubmit={loginForm ? handleLogin : handleRegister}>                  
                    {!loginForm ? (
                        <div className='input-box'>
                            <span>Nome</span>
                            <input value={name} onChange={e => setName(e.target.value)} placeholder='Nome'/>
                        </div>
                    ):
                    (<div></div>)}

                    
                    <div className='input-box'>
                        <span>E-mail</span>
                        <input type={'email'} value={email} onChange={e => setEmail(e.target.value)} placeholder='E-mail'/>
                    </div>

                    {!loginForm ? (
                        <div className='input-box'>
                            <span>Empresa</span>
                            <input value={company} onChange={e => setCompany(e.target.value)} placeholder='Nome'/>
                        </div>
                    ):
                    (<div></div>)}

                    <div className='input-box'>
                        <span>Senha</span>
                        <input type={'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder='******'/>
                    </div>

                    {!loginForm ? (
                        <div className='input-box'>
                            <span>Comfirmar senha</span>
                            <input type={'password'} value={confirmPassword} onChange={e => setComfirmPassword(e.target.value)} placeholder='******'/>
                        </div>
                    )
                    :
                    (<div></div>)}

                    <div className='button-box'>
                        {!loginForm ? (
                            <div className='check'>
                            <label htmlFor='admin'>
                                <input id='admin' type={'checkbox'} onClick={() => setType(!type)}/>
                                <span>Admin</span>
                            </label>
                        </div>
                        )
                    :
                    (<div></div>)}

                        <div className='button'>
                            <input type={'submit'} value={'Enviar'}/>
                        </div>
                    </div>                   
                </form>

                <div className='select-link'>
                    <span onClick={() => setLoginForm(!loginForm)}>{loginForm ? 'Or create an if not registered yet !' : 'Login'}</span>
                </div>
            </div>
            <ToastContainer/>
        </S.Container>
    )
}