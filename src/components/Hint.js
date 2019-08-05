import React from 'react'
import styled from 'styled-components'

function Hint({ input, value }) {
  const isNumber = typeof value === 'number'
  const left = `calc(1.7em + 8px + ${input && input.selectionStart} * 0.7em)`

  return (
    <Wrapper isNumber={isNumber} left={left}>
      {isNumber ? `= ${value}` : value}
    </Wrapper>
  )
}

export default Hint

const Wrapper = styled.p`
  position: absolute;
  left: ${props => (props.isNumber ? props.left : 'calc(1.7em + 8px)')};
  font-size: ${props => (props.isNumber ? '0.8em' : '1em')};
  color: #bfbfbf;
`
