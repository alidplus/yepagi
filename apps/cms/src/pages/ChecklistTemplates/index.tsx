import { Icon } from '@repo/ui.icons'
import { Link, Outlet } from 'react-router'
import BrandLoading from '../../layout/BrandLoading'
import { Suspense } from 'react'

export default function Component() {
  return (
    <div className="grid h-full grid-cols-[max-content_1fr]">
      <ul className="list bg-base-100 rounded-box h-full overflow-y-auto">
        <li className="p-4 pb-2 text-xs tracking-wide opacity-60">
          قالب چک لیست خود را انتخاب کنید
        </li>

        <li>
          <Link to={`/checklist/${1}`} className="list-row flex items-center">
            <div className="w-full flex-1">
              <div>طراحی معماری</div>
              <div className="text-xs font-semibold uppercase opacity-60">
                قالب چک لیست نظارت بر طراحی معماری
              </div>
            </div>
            <Icon name="chevron-left" className="size-6 animate-ping" />
          </Link>
        </li>
      </ul>
      <div className="h-full overflow-y-auto">
        <Suspense fallback={<BrandLoading />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}
Component.displayName = 'ChecklistTemplates'
