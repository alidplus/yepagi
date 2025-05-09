import { ClerkLoaded, ClerkProvider } from '@clerk/clerk-react'
import { dark } from '@clerk/themes'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import { TRPCReactProvider } from './api/client.ts'
import App from './App.tsx'
import { faIR } from './assets/clerk.locales.fa.ts'
import './index.css'
import PWABadge from './PWABadge.tsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

console.log({ dark })

const prefersDarkMode =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl="/"
      signUpUrl="/signup"
      signInUrl="/signin"
      waitlistUrl="/joinus"
      localization={faIR}
      appearance={prefersDarkMode ? { baseTheme: dark } : undefined}
    >
      <TRPCReactProvider>
        <ClerkLoaded>
          <App />
        </ClerkLoaded>
        {/* <Intro /> */}
        <PWABadge />
      </TRPCReactProvider>
    </ClerkProvider>
  </StrictMode>
)
