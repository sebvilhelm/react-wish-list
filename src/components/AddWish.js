import React, { useState, useContext } from 'react'
import styled from 'styled-components/macro'
import wishContext from '../wishContext'
import Button from './Button'

const Label = styled.label`
  display: block;
`

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  font-size: 1rem;
`

const Form = styled.form`
  max-width: 45rem;
  padding: 1rem 0;
`

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
  const { addWish } = useContext(wishContext)
  return (
    <>
      <Form
        onSubmit={event => {
          event.preventDefault()
          addWish({ name, link, price: price > 0 ? price : null })
          setName('')
          setLink('')
        }}
      >
        <Label htmlFor="name">
          Name
          <Input
            id="name"
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}
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
            required
          />
        </Label>
        <Label htmlFor="price">
          Price
          <Input
            id="price"
            type="number"
            value={price}
            onChange={event => setPrice(event.target.value)}
            required
          />
        </Label>
        <Button type="submit">Add wish</Button>
      </Form>
    </>
  )
}

export default AddWish
