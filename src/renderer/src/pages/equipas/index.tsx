import { Content, Div } from './style'
import Box from '../../Components/Box'
import Form from './form'

function Equipas(): JSX.Element {
  return (
    <Content>
      <Box target="Equipa 1">
        <Form />
      </Box>

      <Box target="Equipa 2">
        <Form />
      </Box>
    </Content>
  )
}

export default Equipas
