import React from 'react'
import styled from 'styled-components'

function Math({ inputValue, item }) {
  return (
    <Wrapper>
      <Expression>{inputValue} =</Expression>
      <p>{item}</p>
    </Wrapper>
  )
}

export default Math

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Expression = styled.p`
  width: 100%;
  color: #595959;
  text-align: center;
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 1em;
  margin-bottom: 1em;
  font-size: 0.8em;
`
