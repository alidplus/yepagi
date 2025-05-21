import { SupabaseClient } from '@supabase/supabase-js'
import { Database } from './db'
import { createContext } from 'react'

interface SupabaseContext {
  client: SupabaseClient<Database>
}

export const SupabaseContext = createContext<SupabaseContext>(
  {} as SupabaseContext
)
