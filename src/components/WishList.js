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

  async function fetchWishes() {
    const apiKey = process.env.REACT_APP_AIRTABLE_KEY
    const res = await fetch(
      `https://api.airtable.com/v0/appEwpq4AhqB4Bqk2/Wishes?api_key=${apiKey}`
    )
    const resJson = await res.json()
    const wishes = resJson.records.map(record => record.fields)
    setWishes(wishes)
  }

  React.useEffect(() => {
    fetchWishes()
  })

  return wishes
}

function WishList() {
  const wishes = useWishes()

  return (
    <Grid>
      {wishes ? (
        wishes
          .filter(wish => !wish.gotten)
          .map(wish => <WishCard key={wish.name} wish={wish} />)
      ) : (
        <Spinner>Henter ønsker</Spinner>
      )}
    </Grid>
  )
}

export default WishList
