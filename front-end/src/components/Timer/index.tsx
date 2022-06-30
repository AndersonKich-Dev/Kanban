import * as S from './styles'
import Icon from '@mdi/react';
import { mdiClockOutline } from '@mdi/js'
import { TimerProps } from '../../ts/types'

export function Timer({time, tasksCount, color, countColor}:TimerProps) {


    return(
        <S.Container color={color} countColor={countColor}>
            <Icon path={mdiClockOutline}/>
            <p>{time}</p>
            <span>{tasksCount}</span>
        </S.Container>
    )
}