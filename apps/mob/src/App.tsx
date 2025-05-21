import { SignIn, SignUp, useUser, Waitlist } from '@clerk/clerk-react'
import { useQueryClient } from '@tanstack/react-query'
import { ComponentType, lazy, Suspense, useCallback, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router'
import AppLayout from './Layout/AppLayout'
import BrandLoading from './Layout/BrandLoading'
import { ThemeSwitch } from './Layout/SideBar'
import { useSupabase } from './context'
import Home from './pages/Home'
import type { Metadata } from './pages/onboarding'

const ChecklistItemDetails = lazy(() => import('./pages/Checklist'))
const ProjectEdit = lazy(() => import('./pages/ProjectEdit'))
const OnBoarding = lazy(() => import('./pages/onboarding'))
const Profile = lazy(() => import('./pages/Profile'))
const ProjectsHome = lazy(() => import('./pages/ProjectsHome'))
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
  const { user, isSignedIn } = useUser()
  const queryClient = useQueryClient()
  const supabase = useSupabase()
  const { role, field, defaultPrj } = (user?.unsafeMetadata ??
    {}) as Partial<Metadata>

  const needsOnboarding = !role || !field

  const saveUserMetadata = useCallback(
    async (metadata: Metadata) => {
      let prjId = defaultPrj
      if (!defaultPrj) {
        const { data } = await supabase
          .from('projects')
          .insert({
            title: 'پروژه من',
            created_by: user?.id,
          })
          .select()
        if (data && data.length) {
          prjId = data[0].id
        }
      }

      await user?.update({
        unsafeMetadata: {
          ...user?.unsafeMetadata,
          ...metadata,
          defaultPrj: prjId,
        },
      })
      await user?.reload()

      queryClient.invalidateQueries({ queryKey: ['projects'] })
    },
    [defaultPrj, queryClient, supabase, user]
  )

  return !isSignedIn ? (
    <Routes>
      <Route
        path="/welcome"
        element={
          <AppLayout isMain>
            <Home />
          </AppLayout>
        }
      />
      <Route path="/joinus" Component={withFullLayout(Waitlist)} />
      <Route path="/signin" Component={withFullLayout(SignIn)} />
      <Route path="/signup" Component={withFullLayout(SignUp)} />
      <Route path="/" element={<Redirect to="/signin" />} />
    </Routes>
  ) : needsOnboarding ? (
    <OnBoarding onFinish={saveUserMetadata} metadata={{ field, role }} />
  ) : (
    <Routes>
      <Route
        path="/profile/*"
        Component={withAppLayout(Profile, 'پنل کاربری', false)}
      />
      <Route path="/" Component={withAppLayout(ProjectsHome, 'پروژه‌های من')} />
      <Route
        path="/new/project"
        Component={withAppLayout(ProjectEdit, 'ثبت پروژه جدید', false)}
      />
      <Route
        path="/project/:id/:state?"
        Component={withAppLayout(Project, '', false)}
      />

      <Route
        path="/checklist-item/:id"
        Component={withAppLayout(ChecklistItemDetails, '', false)}
      />

      <Route path="/inbox" Component={withAppLayout(Notifs, 'پیام‌ها')} />
      <Route path="/stat" Component={withAppLayout(Stat, 'درباره‌ما')} />
      <Route
        path="/settings/*"
        Component={withAppLayout(Settings, 'تنظیمات', false)}
      />
    </Routes>
  )
}

function Redirect({ to }: { to: string }) {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(to, { replace: true })
  }, [])
  return null
}
