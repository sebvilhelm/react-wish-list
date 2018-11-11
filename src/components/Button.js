import styled from 'styled-components/macro'

const Button = styled.button`
  padding: 0.5rem 1rem;
  text-align: center;
  background-color: ${({ theme }) => theme.lightGreen};
  border: 1px solid ${({ theme }) => theme.lightGreen};
  border-radius: 0.2rem;
  outline: none;
  color: ${({ theme }) => theme.black};
  text-decoration: none;
  font-size: 1rem;

  &:active {
    transform: translate3d(0, 1px, 0);
  }
`

const OutlineButton = styled(Button)`
  background: transparent;
  color: ${({ theme }) => theme.lightGreen};
`

export default Button
export { OutlineButton }
