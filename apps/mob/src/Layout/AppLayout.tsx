import { SignedIn, UserButton } from '@clerk/clerk-react'
import { PropsWithChildren } from 'react'
import Dock from './Dock'
import SideBar from './SideBar'
import { useNavigate } from 'react-router'

interface AppLayoutProps {
  isMain?: boolean
  title?: string
}

export default function AppLayout({
  children,
  isMain,
  title = 'خانه',
}: PropsWithChildren<AppLayoutProps>) {
  const navigate = useNavigate()
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content grid h-screen w-screen grid-rows-[min-content_1fr_min-content]">
        {/* Navbar */}
        <div className="navbar bg-base-300 sticky top-0 z-10 w-full overflow-auto">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2">{title}</div>
          {isMain ? (
            <SignedIn>
              <UserButton
                showName
                userProfileMode="navigation"
                userProfileUrl="/profile"
              >
                <UserButton.MenuItems>
                  <UserButton.Action
                    label="امنیت حساب"
                    labelIcon={<span>2</span>}
                    onClick={() => {
                      navigate('/profile/security')
                    }}
                  />
                </UserButton.MenuItems>
              </UserButton>
            </SignedIn>
          ) : (
            <BackButton />
          )}
        </div>
        <div className="w-screen overflow-x-hidden overflow-y-auto">
          {children}
        </div>
        {isMain && <Dock />}
      </div>
      <div className="drawer-side z-20">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <SideBar />
      </div>
    </div>
  )
}

export function BackButton() {
  const goBack = () => {
    window.history.back()
  }
  return (
    <button title="back" className="btn btn-ghost" onClick={goBack}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        className="size-4 fill-current"
        viewBox="0 0 1024 1024"
      >
        <path d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z" />
      </svg>
    </button>
  )
}
