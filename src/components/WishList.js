import React from 'react'
import styled from 'styled-components/macro'
import useWishes from './useWishes'
import WishCard from './WishCard'
import Spinner from './Spinner'

const Grid = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  margin: 1rem auto;
  display: grid;
  gap: 1rem;
`

function WishList() {
  const [wishes] = useWishes()

  return (
    <Grid>
      {wishes ? (
        wishes
          .filter(wish => !wish.gotten)
          .map(wish => <WishCard key={wish.id} wish={wish} />)
      ) : (
        <Spinner>Henter ønsker</Spinner>
      )}
    </Grid>
  )
}

export default WishList
