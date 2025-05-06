import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Servicos from '../pages/Servicos'
import Sobre from '../pages/Sobre'

function Router() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/servicos' element={<Servicos/>} />
        <Route path='/sobre' element={<Sobre/>} />
    </Routes>
  )
}

export default Router