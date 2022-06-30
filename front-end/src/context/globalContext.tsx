import { useContext, ReactNode, createContext, useState, useEffect } from 'react'
import { Task, User } from '../ts/types'
import { api } from '../services/api'

type PropsContextData = {
    displayAddCard: boolean;
    setDisplayAddCard: (display: boolean) => void
    selectTask: Task
    setSelectTask: (task:Task) => void
    handleGetTasks: ()=> void
    aguardando: Task[]
    andamento: Task[]
    pendente: Task[]
    finalizado: Task[]
    outros: Task[]
    users: User[]
    setUsers: (users:User[]) => void
}

type ContextProvider = {
    children: ReactNode
}

export const GlobalContext = createContext({} as PropsContextData)

export function GlobalContextProvider({children}:ContextProvider){
    const [displayAddCard, setDisplayAddCard] = useState(false)
    const [selectTask, setSelectTask] = useState({} as Task)
    const [aguardando, setAguardando] = useState<Task[]>([])
    const [andamento, setAndamento] = useState<Task[]>([])
    const [pendente, setPendente] = useState<Task[]>([])
    const [finalizado, setFinalizado] = useState<Task[]>([])
    const [outros, setOutros] = useState<Task[]>([])
    const [users, setUsers] = useState<User[]>([])

    const token = localStorage.getItem('token') as string

    const handleGetTasks = () => {
        api.get<Task[]>('/tasks', {
            headers: {
                Authorization: token,
            },
        }) 
        .then(response => {
                console.log(response.data)
            setAguardando(response.data.filter(item => {
                if(item.progress === "AGUARDANDO") return item
               }))

               setAndamento(response.data.filter(item => {
                if(item.progress === "EXECUTANDO") return item
               }))

               setPendente(response.data.filter(item => {
                if(item.progress === "PENDÊNCIAS") return item
               }))

               setFinalizado(response.data.filter(item => {
                if(item.progress === "FINALIZADO") return item
               }))

               setOutros(response.data.filter(item => {
                if(item.progress === "OUTROS") return item
               }))
        })
        .catch(err => {
            console.log(err.message)
        })
    } 

    const handleGetUsers = () => {
        api.get<User[]>('/users', {
            headers: {
                Authorization: token,
            },
        }) 
       .then(response => {
            setUsers(response.data)
            
       })
       
    }

    useEffect(()=>{
        handleGetUsers()
    },[])

    return(
        <GlobalContext.Provider value={{displayAddCard, 
                                        setDisplayAddCard, 
                                        selectTask, 
                                        setSelectTask,
                                        aguardando,
                                        andamento,
                                        pendente,
                                        finalizado,
                                        outros,
                                        handleGetTasks,
                                        users,
                                        setUsers}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}