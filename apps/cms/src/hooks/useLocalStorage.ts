import React, { useEffect } from 'react'

export const useLocalStorage = <T>(keyName: string, defaultValue: T) => {
  const state = React.useState<T>(() => {
      try {
        const value = window.localStorage.getItem(keyName)
        if (value) {
          const saved = JSON.parse(value) as { v: T }
          return saved?.v ?? defaultValue
        } else {
          window.localStorage.setItem(
            keyName,
            JSON.stringify({ v: defaultValue })
          )
          return defaultValue
        }
      } catch {
        return defaultValue
      }
    }),
    [storedValue] = state

  useEffect(() => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify({ v: storedValue }))
    } catch {
      /** keep calm */
    }
  }, [keyName, storedValue])
  return state
}
