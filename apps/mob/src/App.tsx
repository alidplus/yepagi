import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
  useUser,
  Waitlist,
} from '@clerk/clerk-react'
import { ComponentType, lazy, Suspense } from 'react'
import { Redirect, Route, Router } from 'wouter'
import AppLayout from './Layout/AppLayout'
import BrandLoading from './Layout/BrandLoading'
import { ThemeSwitch } from './Layout/SideBar'
import Home from './pages/Home'
import Profile from './pages/Profile'
import OnBoarding, { Metadata } from './pages/onboarding'

const Settings = lazy(() => import('./pages/Settings'))
const Notifs = lazy(() => import('./pages/Notifs'))
const Stat = lazy(() => import('./pages/Stat'))

const Project = lazy(() => import('./pages/Project'))
function withAppLayout(
  Component: ComponentType,
  title?: string,
  isMain = true
) {
  return function WrappedComponent() {
    return (
      <AppLayout isMain={isMain} title={title}>
        <Suspense fallback={<BrandLoading />}>
          <Component />
        </Suspense>
      </AppLayout>
    )
  }
}

function withFullLayout(Component: ComponentType) {
  return function WrappedComponent() {
    return (
      <div className="relative flex h-screen w-screen items-center-safe justify-center">
        <ThemeSwitch className="absolute start-4 top-4" />
        <Suspense fallback={<BrandLoading />}>
          <Component />
        </Suspense>
      </div>
    )
  }
}

export default function App() {
  const { user } = useUser()
  const { role, field } = (user?.unsafeMetadata ?? {}) as Partial<Metadata>

  const needsOnboarding = !role || !field

  const saveUserMetadata = (metadata: Metadata) => {
    user?.update({ unsafeMetadata: { ...user?.unsafeMetadata, ...metadata } })
    user?.reload()
  }

  return (
    <Router>
      <SignedIn>
        <Route path="/signin">
          <Redirect to="/profile" />
        </Route>
        <Route path="/signup">
          <Redirect to="/profile" />
        </Route>
        <Route
          path={/\/profile(\/\w+)?/i}
          component={withAppLayout(Profile, 'پنل کاربری', false)}
        />
        {needsOnboarding ? (
          <Route path="/">
            <OnBoarding
              onFinish={saveUserMetadata}
              metadata={{ field, role }}
            />
          </Route>
        ) : (
          <>
            <Route path="/" component={withAppLayout(Project, 'پروژه')} />
            <Route
              path={/\/project(\/\w+)?/i}
              component={withAppLayout(Project, 'پروژه')}
            />
          </>
        )}
      </SignedIn>

      <SignedOut>
        <Route path="/signin" component={withFullLayout(SignIn)} />
        <Route path="/signup" component={withFullLayout(SignUp)} />
        <Route
          path={/\/profile(\/\w+)?/i}
          component={withFullLayout(RedirectToSignIn)}
        />
        <Route path="/">
          <AppLayout isMain>
            <Home />
          </AppLayout>
        </Route>
      </SignedOut>

      <Route path="/joinus" component={withFullLayout(Waitlist)} />
      <Route path="/inbox" component={withAppLayout(Notifs, 'پیام‌ها')} />
      <Route path="/stat" component={withAppLayout(Stat, 'درباره‌ما')} />
      <Route
        path={/\/settings(\/\w+)?/i}
        component={withAppLayout(Settings, 'تنظیمات', false)}
      />
    </Router>
  )
}
