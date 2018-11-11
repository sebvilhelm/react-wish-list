import React, { useState } from 'react'
import { db } from '../firebase'
import { Form, Label, Input } from './Form'
import Button from './Button'

function addWish(wish) {
  db.ref('wishes').push(wish)
}

const TextArea = props => <textarea {...props} />

/**
 * type Wish {
 *  name: String!
 *  category: String!
 *  link: String
 *  price: Int
 * }
 */
function AddWish() {
  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  const [author, setAuthor] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  return (
    <>
      <Form
        onSubmit={event => {
          event.preventDefault()
          addWish({ name, link, price, category, author, description })
          setName('')
          setCategory('')
          setAuthor('')
          setDescription('')
          setLink('')
          setPrice(0)
        }}
      >
        <h2>Tilføj ønske</h2>
        <Label htmlFor="name">
          Navn
          <Input
            id="name"
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}
            autoComplete="off"
            required
          />
        </Label>
        <Label htmlFor="category">
          Kategori
          <Input
            id="category"
            type="text"
            value={category}
            onChange={event => setCategory(event.target.value)}
            autoComplete="off"
            required
          />
        </Label>
        {category.toLowerCase() === 'bog' && (
          <Label htmlFor="author">
            Forfatter
            <Input
              id="author"
              type="text"
              value={author}
              onChange={event => setAuthor(event.target.value)}
              autoComplete="off"
              required
            />
          </Label>
        )}
        <Label htmlFor="description">
          Beskrivelse
          <Input
            as={TextArea}
            id="description"
            type="url"
            value={description}
            onChange={event => setDescription(event.target.value)}
            autoComplete="off"
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
          Pris
          <Input
            id="price"
            type="number"
            value={price}
            onChange={event => setPrice(event.target.value)}
            autoComplete="off"
          />
        </Label>
        <Button type="submit">Tilføj</Button>
      </Form>
    </>
  )
}

export default AddWish
