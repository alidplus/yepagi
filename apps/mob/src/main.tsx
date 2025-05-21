import { ClerkLoaded, ClerkProvider } from '@clerk/clerk-react'
import { dark } from '@clerk/themes'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { faIR } from './assets/clerk.locales.fa'
import { SupabaseProvider } from './context'
import './index.css'
import { Toaster } from 'react-hot-toast'
import PWABadge from './PWABadge'

// TwicPics Components importation
import { installTwicpics } from '@twicpics/components/react'
import '@twicpics/components/style.css'
import { BrowserRouter } from 'react-router'

// TwicPics Components configuration (see Setup Options)
installTwicpics({
  // domain is mandatory
  domain: 'https://smartbuild.twic.pics',
  path: 'public',
})

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

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
      <ClerkLoaded>
        <SupabaseProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SupabaseProvider>
      </ClerkLoaded>
    </ClerkProvider>
    <PWABadge />
    <Toaster position="bottom-center" />
  </StrictMode>
)
