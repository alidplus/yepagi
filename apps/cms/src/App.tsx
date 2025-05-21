import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router'
import { SupabaseProvider } from './context'

// TwicPics Components importation
import { installTwicpics } from '@twicpics/components/react'

import '@twicpics/components/style.css'
import router from './router'

installTwicpics({
  domain: 'https://smartbuild.twic.pics',
  path: 'public',
})

export default function App() {
  return (
    <>
      <SupabaseProvider>
        <RouterProvider router={router} />
      </SupabaseProvider>
      <Toaster position="bottom-center" />
    </>
  )
}
