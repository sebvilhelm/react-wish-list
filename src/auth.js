import React, { createContext, useState, useEffect } from 'react'
import { auth } from './firebase'

export const authContext = createContext()

function AuthProvider(props) {
  const [user, setUser] = useState(false)
  async function logIn({ email, password }) {
    const response = await auth.signInWithEmailAndPassword(email, password)
    setUser(true)
    return response
  }

  async function logOut() {
    const response = await auth.signOut()
    setUser(false)
    return response
  }

  useEffect(() => {
    if (auth.currentUser) {
      setUser(true)
    }
  }, [])

  return <authContext.Provider {...props} value={{ user, logIn }} />
}

export default AuthProvider
