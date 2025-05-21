import {
  ClerkLoaded,
  ClerkProvider,
  ClerkLoading,
  ClerkFailed,
} from '@clerk/clerk-react'
import { dark } from '@clerk/themes'
import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { faIR } from './assets/clerk.locales.fa'
import AuthGaurd from './AuthGaurd.tsx'
import './index.css'
import BrandLoading from './layout/BrandLoading.tsx'

const App = lazy(() => import('./App'))

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
        <AuthGaurd Component={App} />
      </ClerkLoaded>
      <ClerkLoading>
        <BrandLoading title="درحال بررسی اطلاعات" />
      </ClerkLoading>
      <ClerkFailed>
        <div className="relative flex h-screen w-screen items-center-safe justify-center">
          <div role="alert" className="alert alert-error">
            <span>عدم دسترسی به بانک اطلاعات</span>
          </div>
        </div>
      </ClerkFailed>
    </ClerkProvider>
  </StrictMode>
)
