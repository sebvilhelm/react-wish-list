import React from 'react'
import styled from 'styled-components/macro'
import { capitalize, formatPrice } from '../helpers'

import Button from './Button'

const Card = styled.div`
  padding: 2rem 1rem;
  background: ${({ theme }) => theme.white};
  box-shadow: ${({ theme }) => theme.boxShadow};
`

const Title = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.green};
  margin-top: 0;
`

const Category = styled.p`
  color: ${({ theme }) => theme.lightGreen};
  font-weight: 600;
  letter-spacing: 0.05px;
  margin-top: -1rem;
`

const Price = styled.span`
  font-size: 1.5rem;
  margin-left: 0.3ch;
`

const Link = props => <a {...props} />

function WishCard({ wish }) {
  const { name, category, price, link, description, author } = wish
  return (
    <Card>
      <Title>
        {capitalize(name)} {author && <small>af {author}</small>}
      </Title>
      <Category>{capitalize(category)}</Category>
      {description && <p>{description}</p>}
      {price ? (
        <p>
          Fundet til <Price>{formatPrice(price)}</Price>
        </p>
      ) : null}
      <Button
        className={Link}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Se link
      </Button>
    </Card>
  )
}

export default WishCard
