import styled from 'styled-components'

export const Container = styled.div`
  min-width: 350px;
  min-height: 420px;
  padding: 10px;
  margin-bottom: 190px;

  display: flex;
  flex-direction: column;
  align-items: space-between;
`

export const BoardColumn = styled.div`
  width: 100%;
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
