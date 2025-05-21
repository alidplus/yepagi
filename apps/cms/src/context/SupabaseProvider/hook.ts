import { useContext } from 'react'
import { SupabaseContext } from './context'

export function useSupabase() {
  const c = useContext(SupabaseContext)
  return c.client
}
