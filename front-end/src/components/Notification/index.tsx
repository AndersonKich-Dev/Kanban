import * as S from './styles'
import { message } from '../../mock/notification'
import { NotificationProps } from '../../ts/types'

export function Notification({isActive}:NotificationProps) {
    
    return (
        <S.Container isActive={isActive}>
            {message.length <= 0 ? 
                (<h1>Sem notificações</h1>) :
                (<h1>{`${message.length} Novas`}</h1>)
            }
            <ul>
            {
                message.map(msg => (
                    <li>{msg.name}</li>
                ))
            }
            </ul>
            <button>Ver Mais</button>
        </S.Container>
    )
}