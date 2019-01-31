import React from 'react'
import styled from 'styled-components/macro'
import { capitalize, formatPrice } from '../helpers'
import { Spacer } from './styled-utils'

import Button from './Button'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: ${({ theme }) => theme.white};
  box-shadow: ${({ theme }) => theme.boxShadow};
`

const Title = styled.h2`
  font-size: 1.5rem;
  margin-top: 0;
  small {
    color: ${({ theme }) => theme.green};
    font-size: 1.05rem;
    display: block;
  }
`

const Category = styled.p`
  color: ${({ theme }) => theme.lightGreen};
  font-weight: 600;
  letter-spacing: 0.05px;
  order: -1;
  margin: 0;
  align-self: flex-end;
`

const Price = styled.span`
  font-size: 1.5rem;
  margin-left: 0.3ch;
  color: ${({ theme }) => theme.black};
`

const DescriptionBox = styled.div`
  background-color: ${({ theme }) => theme.lightGrey};
  padding: 1rem;
  margin-bottom: 1rem;
  p {
    margin: 0;
  }
`

const ButtonContainer = styled.div`
  display: flex;
`

function WishCard({ wish }) {
  const { name, category, price, link, description, author } = wish
  return (
    <Card>
      <Title>
        {capitalize(name)} {author && <small>af {author}</small>}
      </Title>
      <Category>{capitalize(category)}</Category>
      {description && (
        <DescriptionBox>
          <p>{description}</p>
        </DescriptionBox>
      )}
      {price ? (
        <p style={{ marginTop: 0 }}>
          Fundet til <Price>{formatPrice(price)}</Price>
        </p>
      ) : null}
      <Spacer />
      <ButtonContainer>
        {link && (
          <Button
            css={{ flex: 1 }}
            as="a"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Se link
          </Button>
        )}
      </ButtonContainer>
    </Card>
  )
}

export default WishCard
