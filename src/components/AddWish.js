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

function AddWish() {
  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  const { addWish } = useContext(wishContext)
  return (
    <>
      <Form
        onSubmit={event => {
          event.preventDefault()
          addWish({ name, link })
          setName('')
          setLink('')
        }}
      >
        <Label>
          Name
          <Input
            required
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </Label>
        <Label>
          Link
          <Input
            required
            type="url"
            value={link}
            onChange={event => setLink(event.target.value)}
          />
        </Label>
        <Button type="submit">Add wish</Button>
      </Form>
    </>
  )
}

export default AddWish
