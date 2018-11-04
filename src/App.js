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

const theme = {
  maxWidth: '1000px',
  red: 'tomato',
  green: 'hsl(92, 21%, 71%)',
  lightGrey: 'hsl(92,2%,95%)',
  white: 'hsl(92,2%,99%)',
  boxShadow:
    '1px 1px 5px hsla(92,0%,0%,0.05), 1px 1px 10px hsla(92,0%,0%,0.02)',
}

const GlobalStyle = createGlobalStyle`
  html { box-sizing: border-box; font-size: 18px; }
  *,*::before,*::after {box-sizing: inherit;}
  body {
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${theme.white};
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23b5c5a7' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
  }
`

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
