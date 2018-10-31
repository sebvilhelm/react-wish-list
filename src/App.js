import React, { Suspense, lazy } from 'react'
import { createGlobalStyle } from 'styled-components/macro'

import { WishProvider } from './wishContext'
import Spinner from './components/Spinner'
const WishList = lazy(() => import('./components/WishList'))

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
      <div>
        <GlobalStyle />
        <h1>Wish List</h1>
        <Suspense fallback={<Spinner />}>
          <WishList />
        </Suspense>
      </div>
    </WishProvider>
  )
}

export default App
