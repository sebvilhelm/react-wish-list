import React, { useState, useEffect, createContext } from 'react'
import { db } from './firebase'

const context = createContext()

export const WishConsumer = context.Consumer

export function WishProvider(props) {
  const [wishes, setWishes] = useState([])

  useEffect(() => {
    db.ref('wishes').on('value', snapshot => {
      const value = snapshot.val()
      const wishesArray = Object.keys(value).map(key => ({
        ...value[key],
        id: key,
      }))
      setWishes(wishesArray)
      return () => db.ref('wishes').off('value')
    })
  }, [])

  function addWish(wish) {
    db.ref('wishes').push(wish)
  }

  return <context.Provider {...props} value={{ wishes, addWish }} />
}

export default context
