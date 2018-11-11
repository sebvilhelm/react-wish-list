import React from 'react'
import styled from 'styled-components'

import { formatPrice, capitalize } from '../helpers'

const Center = styled.div`
  text-align: center;
`

const Right = styled.div`
  text-align: right;
`

const StyledTable = styled.table`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0.5rem auto;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 0.2rem;

  td,
  th {
    padding: 0.5rem;
  }
  thead {
    background-color: ${({ theme }) => theme.lightGreen};
    color: ${({ theme }) => theme.black};
  }
  tbody {
    tr {
      background-color: ${({ theme }) => theme.white};
      &:nth-of-type(even) {
        background-color: ${({ theme }) => theme.lightGrey};
      }
    }
  }
`

function Wish({ name, link, price, category, id }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{capitalize(category)}</td>
      <td>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            Se link.
          </a>
        ) : (
          <Center>–</Center>
        )}
      </td>
      <td>
        <Right>{price ? formatPrice(price) : <Center>–</Center>}</Right>
      </td>
    </tr>
  )
}

function Table({ wishes }) {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Navn</th>
          <th>Kategori</th>
          <th>Link</th>
          <th>Pris</th>
        </tr>
      </thead>
      <tbody>
        {wishes.map(wish => {
          return <Wish {...wish} key={wish.id} />
        })}
      </tbody>
    </StyledTable>
  )
}

export default Table
