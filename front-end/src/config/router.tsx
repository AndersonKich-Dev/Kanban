import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Login } from '../views/Login'
import { Template } from '../template'
import { Dashboard } from '../components/Dashboard'


export function Router(){

    return(
        <BrowserRouter>
            <Routes>    
                <Route path='/' element={<Login/>}/>

                <Route path='app/' element={<Template/>}>
                    <Route path='/app/dashboard' element={<Dashboard/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}