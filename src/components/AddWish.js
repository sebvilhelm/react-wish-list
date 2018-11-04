import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { db } from '../firebase'
import Button from './Button'

const Label = styled.label`
  display: block;
`

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.green};
`

const Form = styled.form`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0.5rem auto;
  padding: 1rem;
  background-color: ${({ theme }) => theme.white};
  box-shadow: inset ${({ theme }) => theme.boxShadow};
`

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
