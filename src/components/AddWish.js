import React, { useState } from 'react'
import { db } from '../firebase'
import { Form, Label, Input } from './Form'
import Button from './Button'

function addWish(wish) {
  db.ref('wishes').push(wish)
}

/**
 * type Wish {
 *  name: String!
 *  link: String
 *  price: Int
 * }
 */
function AddWish() {
  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  const [price, setPrice] = useState(0)
  return (
    <>
      <Form
        onSubmit={event => {
          event.preventDefault()
          addWish({ name, link, price })
          setName('')
          setLink('')
          setPrice(0)
        }}
      >
        <h2>Add a Wish</h2>
        <Label htmlFor="name">
          Name
          <Input
            id="name"
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}
            autoComplete="off"
            required
          />
        </Label>
        <Label htmlFor="link">
          Link
          <Input
            id="link"
            type="url"
            value={link}
            onChange={event => setLink(event.target.value)}
            autoComplete="off"
          />
        </Label>
        <Label htmlFor="price">
          Price
          <Input
            id="price"
            type="number"
            value={price}
            onChange={event => setPrice(event.target.value)}
            autoComplete="off"
          />
        </Label>
        <Button type="submit">Add wish</Button>
      </Form>
    </>
  )
}

export default AddWish
