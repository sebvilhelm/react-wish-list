import React, { Suspense, lazy } from 'react'
import { Router, Link } from '@reach/router'
import styled, {
  createGlobalStyle,
  ThemeProvider,
} from 'styled-components/macro'

import { WishProvider } from './wishContext'
import Spinner from './components/Spinner'
const WishList = lazy(() => import('./components/WishList'))
const AddWish = lazy(() => import('./components/AddWish'))

const GlobalStyle = createGlobalStyle`
  html { box-sizing: border-box; font-size: 18px; }
  *,*::before,*::after {box-sizing: inherit;}
  body {
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`
const theme = {
  maxWidth: '1000px',
  red: 'tomato',
  lightGrey: 'hsl(0,0%,95%)',
  white: 'hsl(0,0%,99%)',
}

const Header = styled.header`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <WishProvider>
        <main>
          <GlobalStyle />
          <Header>
            <h1>Ønskeseddel</h1>
            <nav>
              <Link to="/">Ønskeseddel</Link>
              <Link to="add-wish">Tilføj Ønske</Link>
            </nav>
          </Header>
          <Suspense fallback={<Spinner />}>
            <Router>
              <WishList path="/" />
              <AddWish path="add-wish" />
            </Router>
          </Suspense>
        </main>
      </WishProvider>
    </ThemeProvider>
  )
}

export default App
