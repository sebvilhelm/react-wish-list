import { useState, useEffect } from 'react'
import { db } from '../firebase'

function useWishes() {
  const [wishes, setWishes] = useState(undefined)
  useEffect(() => {
    db.ref('wishes').on('value', snapshot => {
      const value = snapshot.val()
      if (!value) return
      const wishesArray = Object.keys(value).map(key => ({
        ...value[key],
        id: key,
      }))
      setWishes(wishesArray)
    })
    return () => db.ref('wishes').off('value')
  }, [])

  return [wishes, setWishes]
}

export default useWishes
