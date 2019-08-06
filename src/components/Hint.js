import React from 'react'
import styled from 'styled-components'

function shouldOverlay(value, inputValue) {
  if (!value) return false
  return typeof value !== 'number' && value.startsWith(inputValue)
}

function Hint({ input, inputValue, value }) {
  const isOverlaying = shouldOverlay(value, inputValue)
  const isNumber = typeof value === 'number'

  return (
    <Wrapper>
      {isOverlaying && !isNumber ? null : <Span> {inputValue}</Span>}
      {value ? (
        <HintText isOverlaying={isOverlaying && !isNumber}>
          {isNumber ? `= ${value}` : isOverlaying ? value : `— ${value}`}
        </HintText>
      ) : null}
    </Wrapper>
  )
}

export default Hint

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  left: calc(1.7em + 8px);
`

const Span = styled.span`
  font-family: inherit;
  font-size: 24px;
  margin-right: 0.3em;
  color: transparent;
`

const HintText = styled.p`
  font-size: ${props => (props.isOverlaying ? '1em' : '0.8em')};
  color: #bfbfbf;
`
