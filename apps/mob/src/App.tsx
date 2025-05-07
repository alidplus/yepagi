import { ComponentType, lazy, Suspense } from 'react'
import { Route, Router } from 'wouter'
import AppLayout from './Layout/AppLayout'
import BrandLoading from './Layout/BrandLoading'
import Home from './pages/Home'
import { ThemeSwitch } from './Layout/SideBar'
import { TRPCReactProvider } from './trpc/client'

const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))

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
  return (
    <TRPCReactProvider>
      <Router>
        <Route
          path={/\/settings\/?.*/i}
          component={withAppLayout(Settings, 'تنظیمات', false)}
        />
        <Route
          path={/\/project\/\w+/i}
          component={withAppLayout(Project, 'پروژه')}
        />
        <Route path="/inbox" component={withAppLayout(Notifs, 'پیام‌ها')} />
        <Route path="/stat" component={withAppLayout(Stat, 'درباره‌ما')} />
        <Route path="/login" component={withFullLayout(Login)} />
        <Route path="/register" component={withFullLayout(Register)} />
        <Route path="/">
          <AppLayout isMain>
            <Home />
          </AppLayout>
        </Route>
      </Router>
    </TRPCReactProvider>
  )
}
