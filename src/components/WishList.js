import React, { useContext, useState } from 'react'
import styled from 'styled-components/macro'

import wishContext from '../wishContext'
import { getSortFunction, formatPrice } from '../helpers'

const Center = styled.div`
  text-align: center;
`

const Right = styled.div`
  text-align: right;
`

const Table = styled.table`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  td,
  th {
    padding: 0.5rem;
  }
  thead {
    background-color: ${({ theme }) => theme.red};
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

const Wish = ({ name, link, price }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            {link}
          </a>
        ) : (
          <Center>–</Center>
        )}
      </td>
      <td>
        <Right>{formatPrice(price)}</Right>
      </td>
    </tr>
  )
}

function WishList() {
  const { wishes } = useContext(wishContext)
  const [sortBy, setSortBy] = useState('')

  return (
    <Table>
      <thead>
        <tr>
          <th>Navn</th>
          <th>Link</th>
          <th onClick={() => {}}>
            Pris{' '}
            {sortBy.includes('price') ? (
              sortBy === 'priceASC' ? (
                <span>&darr;</span>
              ) : (
                <span>&uarr;</span>
              )
            ) : null}
          </th>
        </tr>
      </thead>
      <tbody>
        {wishes.sort((a, b) => getSortFunction(a, b, sortBy)).map(wish => {
          return <Wish {...wish} key={wish.id} />
        })}
      </tbody>
    </Table>
  )
}

export default WishList
