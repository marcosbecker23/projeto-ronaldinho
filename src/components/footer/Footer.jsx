import React from 'react'
import { ContainerFooter, CopyFooter, LinkFooter, ListaFooter, ListaItemFooter, TitleFooter } from '../../styles/FooterStyles'

function Footer() {
  const year = new Date().getFullYear();

  return (
    <ContainerFooter>
      <ListaFooter>
        <TitleFooter>Mapa do site</TitleFooter>

        <ListaItemFooter>
          <LinkFooter to="/">Início</LinkFooter>
        </ListaItemFooter>
        <ListaItemFooter>
          <LinkFooter to="/servicos">Serviços</LinkFooter>
        </ListaItemFooter>
        <ListaItemFooter>
          <LinkFooter to="/sobre">Sobre</LinkFooter>
        </ListaItemFooter>
      </ListaFooter>

      <CopyFooter>&copy;Todos os direitos reservados - {year}</CopyFooter>
    </ContainerFooter>
  )
}

export default Footer