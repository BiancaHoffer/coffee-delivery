import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'

import { Header } from './components/Header'
import { Router } from './Router'
import { defaultTheme } from './styles/themes/default'
import { CoffeeTransactionProvider } from './context/CoffeeTransactionContext'

export function App() {
  return (
    <BrowserRouter>
      <CoffeeTransactionProvider>
        <ThemeProvider theme={defaultTheme}>      
          <Header />
          <Router />
          <GlobalStyle />
        </ThemeProvider>
      </CoffeeTransactionProvider>
    </BrowserRouter>
  )
}

