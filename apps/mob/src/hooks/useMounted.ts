import React, { useEffect } from 'react'

export const useMounted = () => {
  const [mounted, setMounted] = React.useState(false)

  useEffect(() => {
    setMounted(true)
    return () => {
      setMounted(false)
    }
  }, [])
  return mounted
}
