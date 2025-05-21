import { Icon } from '@repo/ui.icons'
import { UserButton } from '@clerk/clerk-react'
import Sidebar from './Sidebar'
import { Link, Outlet } from 'react-router'
import { Suspense } from 'react'
import BrandLoading from './BrandLoading'

export default function AppLayout() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-app-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content grid h-screen grid-rows-[min-content_1fr_min-content]">
        {/* Navbar */}
        <div className="navbar bg-base-300 sticky top-0 w-full overflow-auto">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-app-drawer"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <Icon name="hamburger" className="size-6" />
            </label>
          </div>
          <Link to="/" className="mx-2 px-2">
            <h1 className="relative top-2 font-bold">ساخت هوشمند</h1>
            <small className="text-base-content text-xs opacity-75">
              مدیریت محتوای
            </small>
          </Link>
          <div className="h-full flex-1"></div>
          <div className="pe-2">
            <UserButton showName />
          </div>
        </div>
        <div className="w-full overflow-x-hidden overflow-y-auto">
          <Suspense fallback={<BrandLoading />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-app-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <Sidebar className="bg-base-200 text-base-content min-h-full w-80 p-4" />
      </div>
    </div>
  )
}
