import React, { useState, createContext } from 'react'

const context = createContext()

export const WishConsumer = context.Consumer

export function WishProvider(props) {
  const [wishes, setWishes] = useState([])
  function addWish(wish) {
    setWishes([...wishes, wish])
  }
  return <context.Provider {...props} value={{ wishes, addWish }} />
}

export default context
