import React, { Suspense, lazy, useContext, Fragment } from 'react'
import { Router, Link } from '@reach/router'
import styled, {
  createGlobalStyle,
  ThemeProvider,
} from 'styled-components/macro'
import { authContext } from './auth'
import Spinner from './components/Spinner'
import LogIn from './components/LogIn'
import Button, { OutlineButton } from './components/Button'
import { Spacer } from './components/styled-utils'
const WishList = lazy(() => import('./components/WishList'))
const AddWish = lazy(() => import('./components/AddWish'))

const theme = {
  maxWidth: '1000px',
  red: 'hsl(9, 100%, 64%)',
  redBlack: 'hsl(9, 23%, 15%)',
  lightGreen: 'hsl(92, 21%, 71%)',
  green: 'hsl(92, 35%, 50%)',
  darkGreen: 'hsl(92, 40%, 20%)',
  lightGrey: 'hsl(92,2%,95%)',
  white: 'hsl(92,2%,99%)',
  black: 'hsl(92,20%,15%)',
  boxShadow:
    '1px 1px 5px hsla(92,0%,0%,0.05), 1px 1px 10px hsla(92,0%,0%,0.02)',
}

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }
  *,*::before,*::after {box-sizing: inherit;}
  body {
    font-size: 1rem;
    line-height: 1.5;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: ${theme.black};
    background-color: ${theme.lightGrey};
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='${
    theme.green
  }' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
  }
`

const Header = styled.header`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
`

const StyledLink = styled(Link)`
  padding: 0 0.5rem;
  color: ${theme.green};
`

function App() {
  const { user, logOut } = useContext(authContext)
  return (
    <ThemeProvider theme={theme}>
      <main>
        <GlobalStyle />
        <Header>
          <h1>Sebastians Ønskeseddel</h1>
          <Nav>
            <StyledLink to="/">Ønskeseddel</StyledLink>
            {user && (
              <Fragment>
                <StyledLink to="add-wish">Tilføj Ønske</StyledLink>
              </Fragment>
            )}
            <Spacer />
            {user ? (
              <Button onClick={logOut}>Log out</Button>
            ) : (
              <OutlineButton as={Link} to="login">
                Login
              </OutlineButton>
            )}
          </Nav>
        </Header>
        <Suspense fallback={<Spinner />}>
          <Router>
            <WishList path="/" />
            <AddWish path="add-wish" />
            <LogIn path="login" />
          </Router>
        </Suspense>
      </main>
    </ThemeProvider>
  )
}

export default App
