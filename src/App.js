import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
html { box-sizing: border-box; font-size: 18px; }
*,*::before,*::after {box-sizing: inherit;}
body {
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <h1>Wish List</h1>
      </div>
    )
  }
}

export default App
