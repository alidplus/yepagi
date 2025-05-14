import { createClient } from '@supabase/supabase-js'
import { Database } from './db'
import { useSession } from '@clerk/clerk-react'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const createSupabaseClient = (
  session: ReturnType<typeof useSession>['session']
) =>
  createClient<Database>(supabaseUrl, supabaseKey, {
    // Session accessed from Clerk SDK, either as Clerk.session (vanilla
    // JavaScript) or useSession (React)
    accessToken: async () => session?.getToken() ?? null,
  })
