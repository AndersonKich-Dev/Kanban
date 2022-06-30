import * as S from './styles'
import Icon from '@mdi/react';
import { mdiArrowExpandAll, mdiFilter, mdiBell, mdiMagnify} from '@mdi/js'
import { Notification } from '../Notification'
import { useState } from 'react';

import { Timer } from '../Timer'

export function Header() {

    const [activeNotification, setActiveNotification] = useState(false)

    return(
        <S.Container>
            <div className='title'>
                <h1>Tarefas</h1>
                <Timer tasksCount={10} time={'5h'} color='#748B75' countColor='#fff'/>
            </div>

            <div className='search-container'>
                <div className='search'>
                    <Icon path={mdiMagnify}/>
                    <input placeholder='Pesquisar por Tarefa'/>
                </div>

                <div className='filter'>
                    <p>filtro</p>
                    <Icon path={mdiFilter}/>
                </div>

                <div className='bell-icon' onClick={() => activeNotification ? setActiveNotification(false): setActiveNotification(true)}>
                    <Icon path={mdiBell}/>
                    <span className='count'>2</span>
                </div>

                <Icon path={mdiArrowExpandAll}/>

            </div>

            <Notification isActive={activeNotification}/>
            
        </S.Container>
    )
}