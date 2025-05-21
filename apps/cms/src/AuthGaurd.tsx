import { SignIn, useUser } from '@clerk/clerk-react'
import { ComponentType, Suspense } from 'react'
import BrandLoading from './layout/BrandLoading'
import NotAccessible from './layout/NotAccessible'

export default function AuthGaurd({
  Component,
}: Required<{ Component: ComponentType }>) {
  const { isSignedIn, user } = useUser()
  return !isSignedIn ? (
    <div className="relative flex h-screen w-screen items-center-safe justify-center">
      <SignIn />
    </div>
  ) : !user.publicMetadata['cmsAdmin'] ? (
    <NotAccessible />
  ) : (
    <Suspense fallback={<BrandLoading />}>
      <Component />
    </Suspense>
  )
}
