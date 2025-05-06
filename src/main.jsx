import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from './router/Router'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { GlobalStyle } from './styles/Globalstyles'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <BrowserRouter>
      <Navbar/>
      <Router/>
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
