import * as S from './styles'
import logo from '../../assets/Grupo de máscara 4.png'
import Icon from '@mdi/react';
import { mdiMenu, mdiViewDashboard, mdiBell, mdiCalendarClock, mdiBullseyeArrow, mdiFileChartOutline, mdiPlusBoxMultiple, mdiCog, mdiPlus } from '@mdi/js';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context/globalContext'


export function Menu() {

    const [menuSelect, setMenuSelect] = useState('dashboard')
    const { displayAddCard, setDisplayAddCard } = useGlobalContext()

    return(
        <S.Container>
            <S.Logo>
                <img src={logo}  alt='Logo da empresa'/>
            </S.Logo>

            <S.Hamburger>
                <Icon path={mdiMenu}/>
            </S.Hamburger>

            <S.MenuList>
                <Link to={'#'}>
                    <S.MenuItem onClick={() => { setMenuSelect('dashboard')}} className={menuSelect === 'dashboard' ? 'active' : ''}>
                        <Icon path={mdiViewDashboard}/>
                        <span className='bublle'>Dashboard</span>
                    </S.MenuItem>
                </Link>

                <Link to={'#'}>
                    <S.MenuItem onClick={() => { setMenuSelect('teste') }} className={menuSelect === 'teste' ? 'active' : ''}>
                        <Icon path={mdiBell}/>
                        <span className='bublle'>Notificações</span>
                    </S.MenuItem>
                </Link>

                <Link to={'#'}>
                    <S.MenuItem onClick={() => { setMenuSelect('GestãoDeTempo') }} className={menuSelect === 'GestãoDeTempo' ? 'active' : ''}>
                        <Icon path={mdiCalendarClock}/>
                        <span className='bublle'>Gestão de tempo</span>
                    </S.MenuItem>
                </Link>

                <Link to={'#'}>
                    <S.MenuItem onClick={() => { setMenuSelect('GestãoDeProcessos') }} className={menuSelect === 'GestãoDeProcessos' ? 'active' : ''}>
                        <Icon path={mdiBullseyeArrow}/>
                        <span className='bublle'>Gestão de processos</span>
                    </S.MenuItem>
                </Link>

                <Link to={'#'}>
                    <S.MenuItem onClick={() => { setMenuSelect('Relatórios') }} className={menuSelect === 'Relatórios' ? 'active' : ''}>
                        <Icon path={mdiFileChartOutline}/>
                        <span className='bublle'>Relatórios</span>
                    </S.MenuItem>
                </Link>

                <Link to={'#'}>
                    <S.MenuItem onClick={() => { setMenuSelect('Cadastros') }} className={menuSelect === 'Cadastros' ? 'active' : ''}>
                        <Icon path={mdiPlusBoxMultiple}/>
                        <span className='bublle'>Cadastros</span>
                    </S.MenuItem>
                </Link>

                <Link to={'#'}>
                    <S.MenuItem onClick={() => { setMenuSelect('Parâmetros') }} className={menuSelect === 'Parâmetros' ? 'active' : ''}>
                        <Icon path={mdiCog}/>
                        <span className='bublle'>Parâmetros</span>
                    </S.MenuItem>
                </Link>
            </S.MenuList>

            <S.CreateCard onClick={() => setDisplayAddCard(displayAddCard ? false : true)}>
                <div className='icon-create'>
                    <Icon path={mdiPlus}/>
                </div>
            </S.CreateCard>
        </S.Container>
    )
}