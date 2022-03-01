import { LetterBox } from '../LetterBox'
import { Container, BoardColumn } from './styles'

// const NUMBER_OF_ROWS = 6
// const NUMBER_OF_COLS = 5

function Board() {
  return (
    <Container>
      <BoardColumn>
        <LetterBox />
        <LetterBox />
        <LetterBox />
        <LetterBox />
        <LetterBox />
      </BoardColumn>
      <BoardColumn>
        <LetterBox />
        <LetterBox />
        <LetterBox />
        <LetterBox />
        <LetterBox />
      </BoardColumn>
      <BoardColumn>
        <LetterBox />
        <LetterBox />
        <LetterBox />
        <LetterBox />
        <LetterBox />
      </BoardColumn>
      <BoardColumn>
        <LetterBox />
        <LetterBox />
        <LetterBox />
        <LetterBox />
        <LetterBox />
      </BoardColumn>
      <BoardColumn>
        <LetterBox />
        <LetterBox />
        <LetterBox />
        <LetterBox />
        <LetterBox />
      </BoardColumn>
      <BoardColumn>
        <LetterBox />
        <LetterBox />
        <LetterBox />
        <LetterBox />
        <LetterBox />
      </BoardColumn>
    </Container>
  )
}

export { Board }
