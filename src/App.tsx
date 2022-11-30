import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'

import { Header } from './components/Header'
import { Router } from './Router'
import { defaultTheme } from './styles/themes/default'
import { CartProvider } from './hooks/useCart'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ThemeProvider theme={defaultTheme}>      
          <Header />
          <Router />
          <ToastContainer />
          <GlobalStyle />
        </ThemeProvider>
      </CartProvider>
    </BrowserRouter>
  )
}

