import { cn } from '@repo/utils'
import { useEffect, useMemo, useRef } from 'react'
import { Link } from 'wouter'
import { useLocalStorage } from '../hooks/useLocalStorage'

export default function SideBar() {
  return (
    <div className="card menu bg-base-200 min-h-full w-80 rounded-s-none">
      <figure>
        <img
          src="/arch-eng.jpg"
          alt="Shoes"
          className="border-primary border-b-2"
        />
      </figure>
      <div className="avatar avatar-placeholder relative -mt-16 flex justify-center">
        <div className="ring-primary ring-offset-base-100 w-24 rounded-full bg-white ring-2 ring-offset-2">
          <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          {/* <span className="text-3xl">AG</span> */}
        </div>
      </div>
      <h1 className="mt-4 text-center font-bold">مهندس فلانی فلانی</h1>
      <div className="card-body flex flex-1 flex-col p-2">
        <div className="flex items-center">
          <div className="divider w-8" />
          <div className="divider flex-1">پروژه ها</div>
          <button className="btn btn-ghost btn-sm btn-primary btn-square">
            {editSvg}
          </button>
        </div>
        <ul className="menu w-full p-0 [&_li>*]:rounded-none">
          <li>
            <Link asChild to="/project/a">
              <button>پروژه مرزداران</button>
            </Link>
          </li>
          <li>
            <Link asChild to="/project/b">
              <button>پروژه اندیشه</button>
            </Link>
          </li>
          <li>
            <Link asChild to="/project/c">
              <button className="btn btn-ghost btn-primary btn-block">
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
                پروژه جدید
              </button>
            </Link>
          </li>
        </ul>
        <div className="divider">منو کاربری</div>
        <ul>
          <li>
            <a>تنظیمات</a>
          </li>
          <li>
            <Link href="/login">ورود</Link>
          </li>
        </ul>
        <div className="flex-1"></div>
        <div className="divider">تنظیمات</div>
        <div className="card-actions justify-around">
          <ThemeSwitch className="btn btn-soft btn-primary btn-square" />
          <Link to="/settings" className="btn btn-soft btn-primary btn-square">
            {settingsSvg}
          </Link>
          <Link
            to="/logout"
            className="btn btn-soft btn-primary btn-square disabled btn-disabled"
          >
            خروج
          </Link>
        </div>
      </div>
    </div>
  )
}

const settingsSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="fill-current"
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.2788 2.15224C13.9085 2 13.439 2 12.5 2C11.561 2 11.0915 2 10.7212 2.15224C10.2274 2.35523 9.83509 2.74458 9.63056 3.23463C9.53719 3.45834 9.50065 3.7185 9.48635 4.09799C9.46534 4.65568 9.17716 5.17189 8.69017 5.45093C8.20318 5.72996 7.60864 5.71954 7.11149 5.45876C6.77318 5.2813 6.52789 5.18262 6.28599 5.15102C5.75609 5.08178 5.22018 5.22429 4.79616 5.5472C4.47814 5.78938 4.24339 6.1929 3.7739 6.99993C3.30441 7.80697 3.06967 8.21048 3.01735 8.60491C2.94758 9.1308 3.09118 9.66266 3.41655 10.0835C3.56506 10.2756 3.77377 10.437 4.0977 10.639C4.57391 10.936 4.88032 11.4419 4.88029 12C4.88026 12.5581 4.57386 13.0639 4.0977 13.3608C3.77372 13.5629 3.56497 13.7244 3.41645 13.9165C3.09108 14.3373 2.94749 14.8691 3.01725 15.395C3.06957 15.7894 3.30432 16.193 3.7738 17C4.24329 17.807 4.47804 18.2106 4.79606 18.4527C5.22008 18.7756 5.75599 18.9181 6.28589 18.8489C6.52778 18.8173 6.77305 18.7186 7.11133 18.5412C7.60852 18.2804 8.2031 18.27 8.69012 18.549C9.17714 18.8281 9.46533 19.3443 9.48635 19.9021C9.50065 20.2815 9.53719 20.5417 9.63056 20.7654C9.83509 21.2554 10.2274 21.6448 10.7212 21.8478C11.0915 22 11.561 22 12.5 22C13.439 22 13.9085 22 14.2788 21.8478C14.7726 21.6448 15.1649 21.2554 15.3694 20.7654C15.4628 20.5417 15.4994 20.2815 15.5137 19.902C15.5347 19.3443 15.8228 18.8281 16.3098 18.549C16.7968 18.2699 17.3914 18.2804 17.8886 18.5412C18.2269 18.7186 18.4721 18.8172 18.714 18.8488C19.2439 18.9181 19.7798 18.7756 20.2038 18.4527C20.5219 18.2105 20.7566 17.807 21.2261 16.9999C21.6956 16.1929 21.9303 15.7894 21.9827 15.395C22.0524 14.8691 21.9088 14.3372 21.5835 13.9164C21.4349 13.7243 21.2262 13.5628 20.9022 13.3608C20.4261 13.0639 20.1197 12.558 20.1197 11.9999C20.1197 11.4418 20.4261 10.9361 20.9022 10.6392C21.2263 10.4371 21.435 10.2757 21.5836 10.0835C21.9089 9.66273 22.0525 9.13087 21.9828 8.60497C21.9304 8.21055 21.6957 7.80703 21.2262 7C20.7567 6.19297 20.522 5.78945 20.2039 5.54727C19.7799 5.22436 19.244 5.08185 18.7141 5.15109C18.4722 5.18269 18.2269 5.28136 17.8887 5.4588C17.3915 5.71959 16.7969 5.73002 16.3099 5.45096C15.8229 5.17191 15.5347 4.65566 15.5136 4.09794C15.4993 3.71848 15.4628 3.45833 15.3694 3.23463C15.1649 2.74458 14.7726 2.35523 14.2788 2.15224ZM12.5 15C14.1695 15 15.5228 13.6569 15.5228 12C15.5228 10.3431 14.1695 9 12.5 9C10.8305 9 9.47716 10.3431 9.47716 12C9.47716 13.6569 10.8305 15 12.5 15Z"
    />
  </svg>
)

const editSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="size-6 stroke-current"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export function ThemeSwitch({ className }: { className?: string }) {
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
