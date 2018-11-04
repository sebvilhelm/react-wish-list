import React, { useState, useContext } from 'react'
import { Form, Label, Input } from './Form'
import Button from './Button'
import { authContext } from '../auth'

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  function onChange(event) {
    setValue(event.target.value)
  }

  return [value, setValue, onChange]
}

function LogIn() {
  const { logIn } = useContext(authContext)
  const [email, setEmail, onChangeEmail] = useInput('')
  const [password, setPassword, onChangePassword] = useInput('')
  return (
    <Form
      onSubmit={event => {
        event.preventDefault()
        logIn({ email, password })
      }}
    >
      <Label htmlFor="email">
        Email
        <Input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={onChangeEmail}
          required
        />
      </Label>
      <Label htmlFor="password">
        Password
        <Input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </Label>
      <Button type="submit">Log In</Button>
    </Form>
  )
}

export default LogIn
