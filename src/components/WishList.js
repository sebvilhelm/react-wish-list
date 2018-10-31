import React, { useContext } from 'react'

import wishContext from '../wishContext'

const Wish = ({ name, link }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {link}
        </a>
      </td>
    </tr>
  )
}

function WishList() {
  const { wishes } = useContext(wishContext)
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        {wishes.map(wish => {
          return <Wish {...wish} key={wish.name} />
        })}
      </tbody>
    </table>
  )
}

export default WishList
