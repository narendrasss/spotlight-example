import React from 'react'
import styled from 'styled-components'

function Result({ className, item }) {
  return <Wrapper className={className}>{item}</Wrapper>
}

export default Result

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
