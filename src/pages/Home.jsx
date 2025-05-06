import React from 'react'
import { Container } from '../styles/Globalstyles'
import { Apresentacao, ContainerImage, Image, TextApresentacao, TitleApresentacao } from '../styles/HomePageStyles'

function Home() {
  return (
    <Container>
      <Apresentacao>
        <TitleApresentacao>Boas-Vindas</TitleApresentacao>
        <TextApresentacao>Este é o meu site pessoal.</TextApresentacao>
      </Apresentacao>

      <ContainerImage>
        <Image src="../assets/ronaldinho.png" alt="Foto do ronaldinho fazendo hangloose"/>
      </ContainerImage>
    </Container>
  )
}

export default Home