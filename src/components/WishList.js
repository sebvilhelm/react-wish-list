import React from 'react'
import styled from 'styled-components/macro'
import WishCard from './WishCard'
import Spinner from './Spinner'

const Grid = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  margin: 1rem auto;
  display: grid;
  gap: 1rem;
`

function useWishes() {
  const [wishes, setWishes] = React.useState(undefined)
  const [error, setError] = React.useState(null)

  async function fetchWishes() {
    try {
      const res = await fetch('/api/get-wishes')
      const { data } = await res.json()
      setWishes(data.wishes)
    } catch (error) {
      setError(error.message)
    }
  }

  React.useEffect(() => {
    fetchWishes()
  }, [])

  return [wishes, { error }]
}

function WishList() {
  const [wishes, { error }] = useWishes()

  if (error) {
    throw error
  }

  return (
    <Grid>
      {wishes ? (
        wishes.map(wish => <WishCard key={wish.name} wish={wish} />)
      ) : (
        <Spinner>Henter ønsker</Spinner>
      )}
    </Grid>
  )
}

export default WishList
