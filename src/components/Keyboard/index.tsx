import { LetterButton } from '../LetterButton'
import { Container, KeyboardRow } from './styles'

import { EnterIcon } from '../Icons/Enter'

function Keyboard() {
  return (
    <Container>
      <KeyboardRow>
        <LetterButton letter="q" />
        <LetterButton letter="w" />
        <LetterButton letter="e" />
        <LetterButton letter="r" />
        <LetterButton letter="t" />
        <LetterButton letter="y" />
        <LetterButton letter="u" />
        <LetterButton letter="i" />
        <LetterButton letter="o" />
        <LetterButton letter="p" />
      </KeyboardRow>
      <KeyboardRow>
        <LetterButton letter="a" size="m" />
        <LetterButton letter="s" size="m" />
        <LetterButton letter="d" size="m" />
        <LetterButton letter="f" size="m" />
        <LetterButton letter="g" size="m" />
        <LetterButton letter="h" size="m" />
        <LetterButton letter="j" size="m" />
        <LetterButton letter="k" size="m" />
        <LetterButton letter="l" size="m" />
      </KeyboardRow>
      <KeyboardRow>
        <LetterButton letter="Enter" size="g" />
        <LetterButton letter="z" size="m" />
        <LetterButton letter="x" size="m" />
        <LetterButton letter="c" size="m" />
        <LetterButton letter="v" size="m" />
        <LetterButton letter="b" size="m" />
        <LetterButton letter="n" size="m" />
        <LetterButton letter="m" size="m" />
        <LetterButton size="g">
          <EnterIcon />
        </LetterButton>
      </KeyboardRow>
    </Container>
  )
}

export { Keyboard }
