import * as S from './styles'
import { Timer } from '../Timer'
import { ListCardProps } from '../../ts/types'

export function List({title, children, timer, count}:ListCardProps) {
    
    return(
        <S.Container>
            <S.Header>
                <h2>{title}</h2>
                <Timer tasksCount={count} time={timer} color='#fff' countColor={'#748B75'}/>
            </S.Header>
            <S.ListCard>
                {children}
            </S.ListCard>
        </S.Container>

    )
}