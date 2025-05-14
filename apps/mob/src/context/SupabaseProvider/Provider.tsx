import { useSession } from '@clerk/clerk-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren, useMemo, useState } from 'react'
import { SupabaseContext } from './context'
import { createSupabaseClient } from './supabase'

export function Provider({ children }: PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient())
  const { session } = useSession()
  const ctx = useMemo(
    () => ({
      client: createSupabaseClient(session),
    }),
    []
  )
  return (
    <QueryClientProvider client={queryClient}>
      <SupabaseContext.Provider value={ctx} children={children} />
    </QueryClientProvider>
  )
}
