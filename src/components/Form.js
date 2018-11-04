import styled from 'styled-components/macro'

export const Label = styled.label`
  display: block;
`

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.green};
`

export const Form = styled.form`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0.5rem auto;
  padding: 1rem;
  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.green};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow};
`
