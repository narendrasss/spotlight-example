import React from 'react'
import styled from 'styled-components'

import Math from './result/Math'

const items = {
  number: Math
}

function Result({ className, inputValue, item }) {
  const Item = items[typeof item]
  return (
    <Wrapper className={className}>
      {typeof Item === 'function' ? (
        <Item inputValue={inputValue} item={item} />
      ) : (
        item
      )}
    </Wrapper>
  )
}

export default Result

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
`
