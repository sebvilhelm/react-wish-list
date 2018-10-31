import React from 'react'
import styled from 'styled-components/macro'

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  text-align: center;
  background-color: ${({ theme }) => theme.red};
  border: 1px solid ${({ theme }) => theme.red};
  border-radius: 0.2rem;
  outline: none;

  &:active {
    transform: translate3d(0, 1px, 0);
  }
`

function Button(props) {
  return <StyledButton {...props} />
}

export default Button
