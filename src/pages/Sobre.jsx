import React from 'react'
import { Container } from '../styles/Globalstyles'
import { ApresentacaoSobre, ContainerImageSobre, ImageSobre, TextApresentacaoSobre, TitleApresentacaoSobre } from '../styles/SobrePageStyles'

function Sobre() {
  return (
    <Container>
        <ApresentacaoSobre>
            <TitleApresentacaoSobre>Sobre</TitleApresentacaoSobre>
            <TextApresentacaoSobre>Eu sou o Bruxo</TextApresentacaoSobre>
        </ApresentacaoSobre>

        <ContainerImageSobre>
            <ImageSobre src="../assets/ronaldinhobruxo.png" alt="Ronaldinho com um tablet" />
        </ContainerImageSobre>
    </Container>
  )
}

export default Sobre