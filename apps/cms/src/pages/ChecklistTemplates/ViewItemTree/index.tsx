import { Icon } from '@repo/ui.icons'
import demoItems, { CheckItemData } from './demo-items'
import { Suspense } from 'react'
import { Link, Outlet } from 'react-router'
import BrandLoading from '../../../layout/BrandLoading'

interface NodeProps {
  value: CheckItemData
  id: number
}
function Node({ value, id }: NodeProps) {
  return (
    <Link to={String(id)} className="inline-flex gap-2">
      <Icon name="file-empty" className="size-3" />
      {value.t || <em className="opacity-30">(بدون عنوان)</em>}
    </Link>
  )
}

interface GroupProps {
  value: Required<CheckItemData>
}

function Group({ value }: GroupProps) {
  return (
    <details open>
      <summary className="flex gap-2">
        <Icon name="home" className="size-4" />
        <span className="flex-1">
          {value.t || <em className="opacity-30">(بدون عنوان)</em>}
        </span>
      </summary>
      <RecursiveList items={value.c} />
    </details>
  )
}

interface RecursiveListProps {
  items: CheckItemData[]
  className?: string
}

function RecursiveList({ items, className }: RecursiveListProps) {
  return (
    <ul className={className}>
      {items.map((item, k) => (
        <li key={k}>
          {item.c ? <Group value={item} /> : <Node value={item} id={k} />}
        </li>
      ))}
    </ul>
  )
}

export default function Component() {
  return (
    <>
      <RecursiveList
        items={demoItems}
        className="menu h-full w-full flex-nowrap"
      />
      <Suspense fallback={<BrandLoading />}>
        <Outlet />
      </Suspense>
    </>
  )
}
Component.displayName = 'ViewItemTree'
