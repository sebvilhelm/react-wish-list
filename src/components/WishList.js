import React, { useContext } from 'react'

import wishContext from '../wishContext'

const Wish = ({ wish }) => {
  return <div>{wish}</div>
}

function WishList() {
  const { wishes } = useContext(wishContext)
  return (
    <ul>
      {wishes.map(wish => {
        return (
          <li>
            <Wish wish={wish} />
          </li>
        )
      })}
    </ul>
  )
}

export default WishList
