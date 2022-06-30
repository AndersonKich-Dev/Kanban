import * as S from './styles'
import Icon from '@mdi/react';
import { mdiCalendarBlank, mdiClockOutline } from '@mdi/js';
import { useEffect, useState } from 'react';
import { CardProps } from '../../ts/types'
import { taskStatus } from '../../enum/taskStatus'
import { useGlobalContext } from '../../context/globalContext'

export function Card({data}: CardProps) {
    const [status, setStatus] = useState('')
    const { setDisplayAddCard, setSelectTask } = useGlobalContext()

    useEffect(()=>{
        if(data.status === 'A') setStatus(taskStatus["A"]);
        if(data.status === 'B') setStatus(taskStatus["B"]);
        if(data.status === 'C') setStatus(taskStatus["C"]);
        console.log(data)
    },[data])


    const createAlias = (name:string) => {
        const array = name.toUpperCase().split(" ");
        let result = array[0].charAt(0)
        if(array.length > 1){
            result += array[array.length - 1].charAt(0);
        }

        return result
    }

    const updateCard = () => {
        setSelectTask(data)
        setDisplayAddCard(true)
    }

    return(
        <S.Container>
            <S.Content>
                <div className='wrapper-box'>
                    <span className='name'>{data.sector}</span>
                    <div>
                        <p className='title'>Código</p>
                        <p>{data.code}</p>
                    </div>
                </div>

                <h3>{data.name}</h3>

                <div className='wrapper-box'>
                    <div>
                        <p className='title'>Projeto:</p>
                        <p className='code'>{data.project}</p>
                    </div>

                    <div className='date-box'>
                        <p className='title'>Prevista:</p>
                        <div>
                            <Icon className='svg' path={mdiCalendarBlank}/>
                            <p>{data.deadline}</p>
                        </div>
                    </div>
                </div>

                <div className='wrapper-box flex-column'>
                    <p className='title'>Descrição:</p>
                    <p className='description'>{data.description}</p>
                    <span className='bublle'>{data.description}</span>
                </div>
            </S.Content>

            <S.ContentTimer status={data.status}>
                <div className='title-box-top'>
                    <span className='title-timer'>
                        <p>Aconpanhamento</p>
                    </span>
                    <span className='line'></span>
                </div>

                <div className='w-flex-50'>
                    <div className='timer-box'>
                        <p className='title'>Previsão</p>
                        <div className='timer-icon-box'>
                            <Icon className='svg' path={mdiClockOutline}/>
                            <span>{data.estimated_time}</span>
                        </div>
                    </div>
                    <div className='timer-box'>
                        <p className='title'>Saldo</p>
                        <div className='timer-icon-box'>
                            <Icon className='svg' path={mdiClockOutline}/>
                            <span className='saldo'>{data.time_balance}</span>
                        </div>
                    </div>
                </div>

                <div className='w-flex-50 team-box'>
                    <button onClick={()=> updateCard()}>{status}</button>
                    <p className='title'>Equipe</p>
                       <ul>
                        {data.team.map((item, index) => (
                            <li key={index}>
                                <span className='bublle'>{item.user}</span>
                                <span className='name'>{createAlias(item.user)}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </S.ContentTimer>
        </S.Container>
    )
}