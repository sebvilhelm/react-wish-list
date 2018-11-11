import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'

const Text = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin: 1rem 0;
  color: ${({ theme }) => theme.darkGreen};
`

function Spinner({ children }) {
  const [spinner, setSpinner] = useState('...')

  useEffect(
    () => {
      let timer = setTimeout(() => {
        if (spinner.length >= 3) {
          setSpinner('.')
        } else {
          setSpinner(spinner + '.')
        }
      }, 500)
      return () => clearTimeout(timer)
    },
    [spinner]
  )

  return (
    <Text>
      {children}
      {spinner}
    </Text>
  )
}

export default Spinner
