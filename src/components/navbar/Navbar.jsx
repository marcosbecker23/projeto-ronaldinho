import React from 'react'
import { ContainerNav, LinkNav, ListaNav } from '../../styles/NavBarStyles'

function Navbar() {
  return (
    <ContainerNav>
      <ListaNav>
        <li>
          <LinkNav to="/">Início</LinkNav>
        </li>
        <li>
          <LinkNav to="/servicos">Serviços</LinkNav>
        </li>
        <li>
          <LinkNav to="/sobre">Sobre</LinkNav>
        </li>
      </ListaNav>
    </ContainerNav>
  )
}

export default Navbar