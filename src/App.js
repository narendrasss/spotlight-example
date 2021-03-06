import React from 'react'
import Downshift from 'downshift'
import styled, { css } from 'styled-components'
import Spotlight from '@narendras/spotlight'

import Hint from './components/Hint'
import Result from './components/Result'
import icon from './icon.svg'

function App() {
  const spt = new Spotlight(['orange', 'melon', 'watermelon'])
  return (
    <Main>
      <Downshift defaultHighlightedIndex={0}>
        {utils => {
          const results = spt.getResults(utils.inputValue)
          return (
            <SpotlightWrapper {...utils.getRootProps()}>
              <InputContainer isActive={utils.isOpen && results.length}>
                <InputIcon src={icon} alt="spotlight icon" />
                <Input
                  {...utils.getInputProps({
                    placeholder: 'Spotlight Search'
                  })}
                />
                <Hint
                  inputValue={utils.inputValue}
                  value={
                    utils.isOpen && utils.inputValue.length
                      ? results[utils.highlightedIndex]
                      : ''
                  }
                />
              </InputContainer>
              <Results>
                <Menu {...utils.getMenuProps()}>
                  {utils.isOpen
                    ? results.map((result, index) => (
                        <Item
                          {...utils.getItemProps({
                            key: result,
                            item: result,
                            isActive: index === utils.highlightedIndex
                          })}
                        >
                          {result}
                        </Item>
                      ))
                    : null}
                </Menu>
                {utils.isOpen && results.length ? (
                  <StyledResult
                    inputValue={utils.inputValue}
                    item={results[utils.highlightedIndex]}
                  />
                ) : null}
              </Results>
            </SpotlightWrapper>
          )
        }}
      </Downshift>
    </Main>
  )
}

export default App

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
`

const SpotlightWrapper = styled.div`
  margin: auto;
  color: #262626;
  font-size: 24px;
  min-width: 40%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: #fafafa;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  box-shadow: -1px 18px 31px -9px rgba(168, 168, 168, 1);
`

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5em;

  ${props =>
    props.isActive &&
    css`
      padding-bottom: 0.5em;
      border-bottom: 1px solid #d9d9d9;
    `}
`

const InputIcon = styled.img`
  height: 1.2em;
  margin-right: 8px;
  color: #d9d9d9;
`

const Input = styled.input`
  background: transparent;
  width: 100%;
  border: none;
  font-size: inherit;
  &:focus {
    outline: none;
  }

  &:after {
    content: attr(data-autocomplete);
    position: absolute;
    color: #bfbfbf;
    left: 0;
  }

  z-index: 10;
`

const Results = styled.div`
  display: flex;
`

const StyledResult = styled(Result)`
  flex: 3;
`

const Menu = styled.ul`
  list-style: none;
  flex: 2;
  border-right: 1px solid #d9d9d9;
`

const Item = styled.li`
  font-size: 16px;
  padding: 6px 1em;
  background: ${props => (props.isActive ? '#934791' : 'transparent')};
  color: ${props => (props.isActive ? 'white' : 'inherit')};
`
