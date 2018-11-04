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
    auth.onAuthStateChanged(user => {
      if (user) {
        setUser(true)
      } else {
        setUser(false)
      }
    })
  }, [])

  return <authContext.Provider {...props} value={{ user, logIn, logOut }} />
}

export default AuthProvider
