import { SignedIn, SignedOut, useUser } from '@clerk/clerk-react'
import { cn } from '@repo/utils'
import { useEffect, useMemo, useRef } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useQuery } from '@tanstack/react-query'
import { useSupabase } from '../context'
import { Link } from 'react-router'
import { Icon } from '@repo/ui.icons'

export default function SideBar() {
  const { user, isSignedIn } = useUser()

  const avatarWrapper = cn(
    'ring-offset-base-100 w-24 rounded-full bg-white ring-2 ring-offset-2',
    isSignedIn ? 'ring-primary' : 'ring-neutral-700'
  )

  const coverWrapper = cn(
    'border-b-2',
    isSignedIn ? 'border-primary' : 'border-neutral-700'
  )

  return (
    <div className="card menu bg-base-200 min-h-full w-80 rounded-s-none">
      <figure>
        <img src="/arch-eng.jpg" alt="Shoes" className={coverWrapper} />
      </figure>
      <div className="avatar avatar-placeholder relative -mt-16 flex justify-center">
        {isSignedIn ? (
          <div className={avatarWrapper}>
            {user.hasImage ? (
              <img src={user.imageUrl} alt="" />
            ) : (
              <span className="text-3xl">{user.firstName?.charAt(0)}</span>
            )}
          </div>
        ) : (
          <div className={avatarWrapper}>
            <img src="/profile-fallback.webp" alt="" />
          </div>
        )}
      </div>

      {isSignedIn ? (
        <h1 className="mt-4 text-center font-bold">مهندس {user.fullName}</h1>
      ) : (
        <h1 className="mt-4 text-center font-bold">میهمان</h1>
      )}
      <div className="card-body flex flex-1 flex-col p-2">
        <div className="flex items-center">
          <div className="divider w-8" />
          <div className="divider flex-1">پروژه ها</div>
          <button className="btn btn-ghost btn-sm btn-primary btn-square">
            <Icon name="edit" className="size-6" />
          </button>
        </div>
        <ul className="menu w-full p-0 [&_li>*]:rounded-none">
          <MyProjectsList />
          <li>
            <Link
              className="btn btn-ghost btn-primary btn-block"
              to="/project/c"
            >
              <svg
                className="size-4 stroke-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12H20M12 4V20"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>پروژه جدید</span>
            </Link>
          </li>
        </ul>
        <div className="divider">منو کاربری</div>
        <ul>
          <SignedIn>
            <li>
              <Link to="/settings">تنظیمات</Link>
            </li>
          </SignedIn>
          <SignedOut>
            <li>
              <Link to="/signin">ورود</Link>
            </li>
          </SignedOut>
        </ul>
        <div className="flex-1"></div>
        <div className="flex w-full justify-center">
          <div className="badge badge-neutral">
            نسخه <bdi dir="ltr">{BUILD_TIME}</bdi>
          </div>
        </div>
      </div>
    </div>
  )
}

function MyProjectsList() {
  const supabase = useSupabase()
  const q = useQuery({
    queryKey: ['projects'],
    async queryFn() {
      const { data } = await supabase.from('projects').select()
      return data
    },
  })
  return (
    <>
      {q.data?.map((r) => (
        <li key={r.id}>
          <Link to={`/project/${r.id}`}>
            <button>{r.title}</button>
          </Link>
        </li>
      ))}
    </>
  )
}

export function ThemeSwitch(props: { className?: string }) {
  return !props
}

export function ThemeSwitch2({ className }: { className?: string }) {
  const ref = useRef<HTMLInputElement>(null)
  const [state, toggle] = useLocalStorage<number>('theme-switch-value', 2)
  const prefersDarkMode = useMemo(
    () =>
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches,
    []
  )
  useEffect(() => {
    if (ref.current) ref.current.indeterminate = state === 2
  }, [state])
  return (
    <label className={`swap swap-rotate p-2 ${className}`}>
      {/* this hidden checkbox controls the state */}
      <input
        type="checkbox"
        className="theme-controller"
        value={prefersDarkMode ? 'light' : 'dark'}
        ref={ref}
        checked={state === 1}
        onChange={() => {
          toggle((prev) => (prev + 1) % 2)
        }}
      />

      {/* sun icon */}
      <svg
        className={cn(
          'size-8 fill-current',
          !prefersDarkMode ? 'swap-off' : 'swap-on'
        )}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
      </svg>

      {/* moon icon */}
      <svg
        className={cn(
          'size-8 fill-current',
          prefersDarkMode ? 'swap-off' : 'swap-on'
        )}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
      </svg>

      {/* system icon */}
      <svg
        className="swap-indeterminate size-8 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
      >
        <path d="M291 694.9H182.9v-512h658.3v401.3h73.1V109.7H109.7V768H291zM219.4 841.1h365.7v73.1H219.4z" />
        <path d="M754.2 597.3c32-90.2 12.2-194.6-59.9-266.8-49.9-49.9-115.3-74.8-180.6-74.8-54 0-108.1 17-153.5 51l153.1 153.1-51.7 51.7-153.2-153.1c-75.1 100.3-67.4 243 23.8 334.1 49.9 49.9 115.2 74.8 180.6 74.8 29.2 0 58.4-4.9 86.2-14.8l172.8 172.8L927 770.1 754.2 597.3zM650.7 700.8L618 668.1l-43.5 15.5c-19.8 7-40.6 10.6-61.7 10.6-48.7 0-94.5-18.9-128.9-53.3-41.5-41.5-59.1-99.5-51.4-154.8l77.3 77.2 51.7 51.7 51.7-51.7 51.7-51.7 51.7-51.7-51.6-51.8-77.4-77.4c8.6-1.2 17.3-1.8 26.1-1.8 48.7 0 94.5 19 128.9 53.4 49.5 49.5 66.3 124.3 42.7 190.6l-15.5 43.5 32.7 32.7 121.1 121.1-51.7 51.7-121.2-121.1z" />
      </svg>
    </label>
  )
}
