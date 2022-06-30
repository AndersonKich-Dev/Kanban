import { Card } from '../Card'
import { List } from '../List'
import * as S from './styles'
import { useEffect, useState } from 'react'
import { Task } from '../../ts/types'
import { useGlobalContext } from '../../context/globalContext'

export function Dashboard() {

    const { handleGetTasks, aguardando, andamento, pendente, finalizado, outros } = useGlobalContext()

    useEffect(()=>{
        handleGetTasks()
    },[])


    return(
        <S.Container>
            <List title='Aguardando' timer={'5h'} count={aguardando.length}>
                {aguardando.map(task => (
                    <Card data={task}/>
                ))}
            </List>

            <List title='Em Andamento' timer={'1h'} count={andamento.length}>
                {andamento.map(task => (
                    <Card data={task}/>
                ))}
            </List>

            <List title='Pendências' timer={'3h'} count={pendente.length}>
                {pendente.map(task => (
                    <Card data={task}/>
                ))}
            </List>

            <List title='Finalizado' timer={'1h'} count={finalizado.length}>
                {finalizado.map(task => (
                    <Card data={task}/>
                ))}
            </List>

            <List title='Outros' timer={'1h'} count={outros.length}>
                {outros.map(task => (
                    <Card data={task}/>
                ))}
            </List>
        </S.Container>
    )
}