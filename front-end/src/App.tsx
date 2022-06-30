import { ThemeProvider } from 'styled-components'
import {lightTheme} from './theme/themeConfig'
import * as S from './styles/appStyles'
import { Router } from './config/router'
import { GlobalContextProvider } from './context/globalContext'

export function App() {
  return (
    <ThemeProvider theme={lightTheme}>     
      <GlobalContextProvider>
        <S.Container>
            <Router/>
        </S.Container>
      </GlobalContextProvider>                                                                                                                                                                                                                                                                                
    </ThemeProvider>
  )
}


