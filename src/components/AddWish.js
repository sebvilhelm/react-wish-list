import React, { useState, useContext } from 'react'
import wishContext from '../wishContext'

function AddWish() {
  const [value, setValue] = useState('')
  const { addWish } = useContext(wishContext)
  return (
    <>
      <form
        onSubmit={event => {
          event.preventDefault()
          addWish(value)
          setValue('')
        }}
      >
        <label>
          Name
          <input
            type="text"
            value={value}
            onChange={event => setValue(event.target.value)}
          />
        </label>
        <button type="submit">Add wish</button>
      </form>
    </>
  )
}

export default AddWish
