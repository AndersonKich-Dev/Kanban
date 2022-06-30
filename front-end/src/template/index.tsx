import { Menu } from '../components/Menu'
import { Outlet } from 'react-router-dom'
import * as S from './styles'
import Icon from '@mdi/react';
import { mdiBriefcase, mdiChevronLeft, mdiChevronRight, mdiCallSplit, mdiCheckCircle } from '@mdi/js'
import { Header } from '../components/Header';
import { AddCardModal } from '../components/Modal/AddCard'
import { useGlobalContext } from '../context/globalContext'


export function Template() {

    return (
        <S.TemplateContainer>
            <AddCardModal/>
            <Menu/>
            <S.ContentBox>
                <div className='tab'>
                    <div className='action-box'>
                        <Icon path={mdiBriefcase}/>
                        <Icon className='arrow-icon' path={mdiChevronRight}/>
                        <span className='icon-count'>3</span>
                    </div>
                </div>
              
                <div className='content-center'>
                    <Header/>

                    <div className='content'>
                        <Outlet/>   
                    </div>
                </div>
                   
                <div className='tab'>
                    <div className='action-box'>
                        <Icon path={mdiCallSplit}/>
                        <Icon className='arrow-icon' path={mdiChevronLeft}/>
                        <span className='icon-count'>3</span>
                    </div>
                </div>
                <div className='tab'>
                    <div className='action-box'>
                        <Icon path={mdiCheckCircle}/>
                        <Icon className='arrow-icon' path={mdiChevronLeft}/>
                        <span className='icon-count'>3</span>
                    </div>
                </div>
            </S.ContentBox>
        </S.TemplateContainer>
    )
}