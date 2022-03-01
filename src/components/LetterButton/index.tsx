/* eslint-disable react/require-default-props */
import React from 'react'

import { Container } from './styles'

interface LetterButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  letter?: string
  size?: 'p' | 'm' | 'g'
}

function LetterButton({ letter = '', children, size }: LetterButtonProps) {
  return (
    <Container type="button" size={size}>
      {letter || children}
    </Container>
  )
}

export { LetterButton }
