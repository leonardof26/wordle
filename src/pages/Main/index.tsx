import { Keyboard } from '../../components/Keyboard'
import { Board } from '../../components/Board'
import { Container } from './styles'

function Main() {
  return (
    <Container>
      <Board />
      <Keyboard />
    </Container>
  )
}

export { Main }
