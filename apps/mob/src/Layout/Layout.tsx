import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 sticky top-0 z-10 w-full">
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
          <div className="mx-2 flex-1 px-2">مهدیار</div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <a>Navbar Item 1</a>
              </li>
              <li>
                <a>Navbar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side z-20">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="card menu bg-base-200 min-h-full w-80">
          <figure>
            <img src="/arch-eng.jpg" alt="Shoes" />
          </figure>
          <div className="card-body flex flex-1 flex-col p-2">
            <h2 className="card-title">منو کاربری</h2>
            <ul className="flex-1">
              {/* Sidebar content here */}
              <li>
                <a>تنظیمات</a>
              </li>
              <li>
                <a>ورود</a>
              </li>
            </ul>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">ثبت نام</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
