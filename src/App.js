import React from 'react'
import Downshift from 'downshift'
import clsx from 'clsx'
import Spotlight from '@narendras/spotlight'

import icon from './icon.svg'
import './App.scss'

function App() {
  const [value, setValue] = React.useState('')
  const inputRef = React.createRef()

  const spt = new Spotlight(['orange', 'melon', 'watermelon'])
  const results = spt.getResults(value)

  return (
    <main className="main">
      <Downshift inputValue={value} onInputValueChange={val => setValue(val)}>
        {utils => (
          <div className="spotlight">
            <div
              className={clsx('input_container', {
                'input_container--active': utils.isOpen && results.length > 0
              })}
            >
              <img src={icon} alt="spotlight icon" className="input_icon" />
              <input
                className="input"
                ref={inputRef}
                {...utils.getInputProps({ placeholder: 'Spotlight Search' })}
              />
            </div>
            <ul {...utils.getMenuProps()}>
              {utils.isOpen
                ? results.map(result => (
                    <li {...utils.getItemProps({ key: result, item: result })}>
                      {result}
                    </li>
                  ))
                : null}
            </ul>
          </div>
        )}
      </Downshift>
    </main>
  )
}

export default App
