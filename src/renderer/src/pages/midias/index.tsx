import { Container, Box, Button } from '@renderer/components/'
import Form from './form'

import { Content } from './style'

function Midias(): JSX.Element {
  return (
    <Container>
      <Content>
        <Box target="Inicio de jogo" type={1}>
          <Form />
          <div className="buttonContent">
            <Button type={2}>Salvar</Button>
            <Button type={2}>Importar</Button>
          </div>
        </Box>
        <Box target="Intervalo" type={1}>
          <Form />
          <div className="buttonContent">
            <Button type={2}>Salvar</Button>
            <Button type={2}>Importar</Button>
          </div>
        </Box>
        <Box target="Desconto de tempo" type={1}>
          <Form />
          <div className="buttonContent">
            <Button type={2}>Salvar</Button>
            <Button type={2}>Importar</Button>
          </div>
        </Box>
      </Content>
    </Container>
  )
}

export default Midias
