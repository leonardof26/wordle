import styled from 'styled-components'

interface ButtonProps {
  size?: 'p' | 'm' | 'g'
}

const sizes = {
  p: '2.75rem',
  m: '2.75rem',
  g: '4.0625rem',
}

export const Container = styled.button<ButtonProps>`
  width: ${(props) => sizes[props.size || 'p']};
  height: 3.625rem;

  font-weight: bold;
  border-radius: 4px;
  user-select: none;
  background-color: var(--grey);
  color: var(--white);
  border: 0;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  margin-right: 0.375rem;
  transition: filter 0.2s;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    filter: brightness(0.9);
  }

  svg {
    fill: var(--white);
  }
`
