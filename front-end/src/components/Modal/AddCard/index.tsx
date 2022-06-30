import * as S from './styles'
import { taskProgress } from '../../../enum/taskProgress'
import { FormEvent, useEffect, useState } from 'react'
import { Team, Task, User } from '../../../ts/types'
import Icon from '@mdi/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { mdiPlusBox, mdiCloseBox } from '@mdi/js';
import { useGlobalContext } from '../../../context/globalContext'

import { api } from '../../../services/api'


export function AddCardModal() {
    const [team, setTeam] = useState<Team[]>([])
    const [name, setName] = useState('')
    const [project, setProject] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('')
    const [estimated_time, setEstimated_time] = useState('')
    const [time_balance, setTime_balance] = useState('')
    const [progress, setProgress] = useState('')
    const [sector, setSector] = useState('')
    const [deadline, setDeadline] = useState('')
    const [user_id, setUserId] = useState(localStorage.getItem('id'))
    const [id, setId] = useState('')
    const [add, setAdd] = useState(false)
    const [excluir, setExcluir] = useState(false)

    const token = localStorage.getItem('token') as string

    const {displayAddCard, setDisplayAddCard, selectTask, setSelectTask, handleGetTasks, users, setUsers} = useGlobalContext()

    useEffect(()=>{
        if(selectTask) populateCard(selectTask)

    },[ displayAddCard])

    const controll = (value:Team) => {
        
        const user = selectTask.team.filter(user => {
           return user.user_id === value.user_id           
        })
        
        if(user.length > 0) return alert('ja esxiste');

        setTeam([...team, value])
        toast.success(`${value.user} foi adicionado há equipe`, { theme: "colored" })
        

    }

    async function handleCreateTask(e:FormEvent) {
        e.preventDefault()

        const data = {
            name,
            project,
            description,
            status,
            sector,
            progress,
            estimated_time,
            time_balance,
            team,
            deadline,
            user_id,
        }

       try{
        if(selectTask.id){
            await api.put(`/task/${selectTask.id}`, data,{
                headers: {
                    Authorization: token,
                },
            })
            toast.success('Atualizado com sucesso!', { theme: "colored" })
            setSelectTask({} as Task)          
            clearInput()
            handleGetTasks()                     
        }
        else{
            await api.post("/task", data, {
                headers: {
                    Authorization: token,
                },
            })
            toast.success('Arefa criada com sucesso!', { theme: "colored" })
            handleGetTasks()
            clearInput()           
        }

       }
       catch(err:any){
        toast.error(`${err.response.data}`, { theme: "colored" })
       }

    }

    const populateCard = (task:Task) => {
        setProgress(task.progress)
        setName(task.name)
        setDeadline(task.deadline)
        setDescription(task.description)
        setEstimated_time(task.estimated_time)
        setProject(task.project)
        setSector(task.sector)
        setStatus(task.status)
        setTime_balance(task.time_balance)
        setId(task.id)
    }

    const clearInput = () => {
        setProgress('')
        setName('')
        setDeadline('')
        setDescription('')
        setEstimated_time('')
        setProject('')
        setSector('')
        setStatus('')
        setTime_balance('')
        setTeam([])
        setId('')
    }

    const exit = () => {
        clearInput()
        setSelectTask({} as Task)
        setDisplayAddCard(false)
    }


    async function handleDeleteTeam(id:string, name:string){    
        await api.delete(`/team/${id}`, {
            headers: {
                Authorization: token,
            },
        })
            toast.success(`${name} foi removido da equipe`, { theme: "colored" })
            handleGetTasks()
    }
    

    return(
        <S.container display={displayAddCard} >
            <S.Modal>
                <div className='clear'></div>
                <form className='form' onSubmit={handleCreateTask}>
                    <div className='select-box'>
                        <select onChange={e => setProgress(e.target.value)}>
                            <option>Progresso</option>
                            <option value={taskProgress["AGUARDANDO"]}>{taskProgress["AGUARDANDO"]}</option>
                            <option value={taskProgress["EXECUTANDO"]}>{taskProgress["EXECUTANDO"]}</option>
                            <option value={taskProgress["FINALIZADO"]}>{taskProgress["FINALIZADO"]}</option>
                            <option value={taskProgress["PENDÊNCIAS"]}>{taskProgress["PENDÊNCIAS"]}</option>
                            <option value={taskProgress["OUTROS"]}>{taskProgress["OUTROS"]}</option>
                        </select>
                    </div>
                   
                    <div className='w-flex-wrapper'>
                        <div className='input-box'>
                            <span>Setor</span>
                            <input value={sector} onChange={e => setSector(e.target.value)} placeholder='Sector'/>
                        </div>

                        <div className='input-box'>
                            <span>Tarefa</span>
                            <input value={name} onChange={e => setName(e.target.value)} placeholder='Name'/>
                        </div>
                    </div>

                    <div className='w-flex-wrapper'>
                        <div className='input-box'>
                            <span>Projeto</span>
                            <input value={project} onChange={e => setProject(e.target.value)} placeholder='Name project'/>
                        </div>

                        <div className='input-box'> 
                            <span>Prazo</span>
                            <input value={deadline} onChange={e => setDeadline(e.target.value)} type={"date"} placeholder='data prevista'/>
                        </div>
                    </div>

                    <div className='w-flex-wrapper'>                  
                        <div className='input-box'>
                            <span>Descrição</span>
                            <input value={description} onChange={e => setDescription(e.target.value)} placeholder='Description'/>
                        </div>

                        <div className='select-box w-50'>
                            <select onChange={e => setStatus(e.target.value)}>
                                <option>Status</option>
                                <option value={"A"}>EM DIA</option>
                                <option value={"B"}>ATENÇÃO</option>
                                <option value={"C"}>ATRASADO</option>
                            </select>                   
                        </div>
                    </div>

                    <div className='create-team-box'>
                        <div onClick={()=> setAdd(!add)}><Icon color={'#107154'} path={mdiPlusBox}/></div> <p>EQUIPE</p> <div onClick={() => setExcluir(!excluir)}><Icon color={'#ff261b'} path={mdiCloseBox}/></div>
                    </div>

                    <div className='w-flex-wrapper'>
                        <div className='input-box'>
                            <span>Previsão</span>
                            <input placeholder='ex: 00:30' value={estimated_time} onChange={e => setEstimated_time(e.target.value)} />
                        </div>

                        <div className='input-box'>
                            <span>Saldo</span>
                            <input placeholder='ex: +02:10' value={time_balance} onChange={e => setTime_balance(e.target.value)}/>
                        </div>
                    </div>

                    <div className='button-box'>
                        <input className='button' type={"submit"} value="enviar"/>
                        <input onClick={exit} className='button exit' type={'reset'} value="Fechar"/>
                    </div>
                </form>

                <S.TeamBox className='team-box add' select={add}>
                    <ul>
                    <h2>Adicionar membro</h2>
                    {users.map(item => (
                            <li>
                            <div className='select-team' onClick={()=> controll({user: `${item.name}`, user_id: `${item.id}`})}>
                                <Icon color={'#107154'} path={mdiPlusBox}/>
                            </div>
                            <span>{item.name}</span>
                            </li>
                    ))}
                    </ul> 
                    <button className='team-button' onClick={()=> setAdd(!add)}>Voltar</button>
                </S.TeamBox> 

                {selectTask.id ? (
                    <S.TeamBox className='team-box remove' select={excluir}>
                    <ul>
                    <h2>Remover membro</h2>
                    {selectTask.team.map(user => (
                        <li className='select-team'>
                        <span>{user.user}</span>
                        <div className='select-icon' onClick={()=> handleDeleteTeam(user.id ? user.id : '', user.user)}><Icon color={'#ff261b'} path={mdiCloseBox}/></div>
                        </li>
                    ))}
                    </ul>
                    <button className='team-button' onClick={() => setExcluir(!excluir)}>Voltar</button>
                </S.TeamBox>
                )
            :
            (<div></div>)}  

            </S.Modal>
            <ToastContainer autoClose={1000}/>
        </S.container>
    )
}

