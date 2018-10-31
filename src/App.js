import React, { Suspense, lazy } from 'react'
import { Router, Link } from '@reach/router'
import { createGlobalStyle } from 'styled-components/macro'

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
function App() {
  return (
    <WishProvider>
      <main>
        <GlobalStyle />
        <header>
          <h1>Wish List</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="add-wish">Add Wish</Link>
          </nav>
        </header>
        <Suspense fallback={<Spinner />}>
          <Router>
            <WishList path="/" />
            <AddWish path="add-wish" />
          </Router>
        </Suspense>
      </main>
    </WishProvider>
  )
}

export default App
