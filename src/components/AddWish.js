import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import wishContext from '../wishContext'

const Label = styled.label`
  display: block;
`

const Input = styled.input`
  width: 100%;
`

const Form = styled.form`
  max-width: 45rem;
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
        <button type="submit">Add wish</button>
      </Form>
    </>
  )
}

export default AddWish
