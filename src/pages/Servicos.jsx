import React from 'react'
import { Container } from '../styles/Globalstyles'
import { ApresentacaoServicos, ContainerImageServicos, ImageServicos, TextApresentacaoServicos, TitleApresentacaoServicos } from '../styles/ServicosPageStyles'

function Servicos() {
  return (
    <Container>
        <ApresentacaoServicos>
            <TitleApresentacaoServicos>Serviços</TitleApresentacaoServicos>
            <TextApresentacaoServicos>Por enquanto não temos nenhum serviços</TextApresentacaoServicos>
        </ApresentacaoServicos>

        <ContainerImageServicos>
            <ImageServicos src="../assets/ronaldinhot.png" alt="Ronaldinho muito triste" />
        </ContainerImageServicos>
    </Container>
  )
}

export default Servicos