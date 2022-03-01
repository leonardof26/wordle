import styled from 'styled-components'

export const Container = styled.div`
  min-width: 484px;
  min-height: 190px;

  position: absolute;
  bottom: 1rem;
`

export const KeyboardRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }
  &:nth-child(2) {
    padding: 0 1.3rem;
  }
`
