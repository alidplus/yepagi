import { Icon, IconStack } from '@repo/ui.icons'
import { cn } from '@repo/utils'
import { useLongPress } from 'use-long-press'
import { Database } from '../../context/SupabaseProvider/db'
import { faInt } from '../../utils/formaters'
import ChecklistContext, {
  IChecklistItem,
  useChecklistChildrenScoreTuple,
  useChecklistItemContext,
  useChecklistItemsChildren,
} from './ChecklistContext'
import { Link } from 'react-router'

interface ChecklistItemProps {
  item: IChecklistItem
  prefix: string
}

const colors: Record<Database['public']['Enums']['ChecklistStatus'], string> = {
  accepted: 'text-success',
  rejected: 'text-error',
  skipped: 'opacity-50 line-through',
}

export function ChecklistItem({ item, prefix }: ChecklistItemProps) {
  const children = useChecklistItemsChildren(item.id)
  const [selected, setSelected, { dirty }] = useChecklistItemContext(item.id)
  const [parentScore, fullScore] = useChecklistChildrenScoreTuple(item.id)

  const toggle = () => {
    setSelected(!selected)
  }
  const handlers = useLongPress(async () => {
    setSelected(!selected)
  })

  const collapseHandlers = dirty ? { onClick: toggle } : handlers()

  const label = (
    <span>
      <span className={item.status ? colors[item.status] : undefined}>
        {item.data.title || prefix}
      </span>
      <Link
        to={`/checklist-item/${item.data.id}`}
        className="btn btn-circle btn-soft btn-info btn-xs z-10 ms-2 inline"
      >
        <Icon name="bulb-on" className="size-4" />
      </Link>
    </span>
  )

  const checkbox = (
    <input type="checkbox" checked={selected} readOnly className="checkbox" />
  )

  return children.length ? (
    <div tabIndex={0} className="collapse-arrow collapse">
      <input type="checkbox" className="peer" />
      <div
        className={cn(
          'collapse-title flex justify-between ps-12 font-semibold after:start-6! after:end-auto! after:top-7!',
          {
            'text-warning': parentScore !== fullScore && parentScore !== 0,
            'text-success': parentScore === fullScore,
          }
        )}
      >
        {label}
        <span className="ps-4 whitespace-nowrap">
          ({faInt(parentScore)} از {faInt(fullScore)})
        </span>
      </div>
      <div className="collapse-content pe-0">
        <div className="flex flex-col rounded-br-xl border-s border-b border-dashed border-neutral-600">
          <RecursiveChecklistItems id={item.id} prefix={prefix} />
        </div>
      </div>
    </div>
  ) : (
    <div tabIndex={0} className="collapse">
      <div
        className="collapse-title flex items-start gap-2 font-semibold"
        {...collapseHandlers}
      >
        <IconStack
          className={cn('size-6 shrink-0', {
            'opacity-50': !item.status && !!dirty,
            checkbox: !dirty,
          })}
        >
          {!dirty || !selected ? (
            <>
              {item.status === 'accepted' ? (
                <Icon
                  name="check"
                  className={cn('size-6', { 'opacity-50': dirty })}
                />
              ) : item.status === 'rejected' ? (
                <Icon
                  name="dismiss"
                  className={cn('size-4', { 'opacity-50': dirty })}
                />
              ) : item.status === 'skipped' ? (
                <Icon
                  name="skip-forward"
                  className={cn('size-4', { 'opacity-50': dirty })}
                />
              ) : (
                <Icon
                  name="question"
                  className={cn('size-4', { 'opacity-50': dirty })}
                />
              )}
            </>
          ) : null}
          {dirty ? checkbox : null}
        </IconStack>
        {label}
      </div>
    </div>
  )
}

export function RecursiveChecklistItems({
  prefix,
  id,
}: {
  id?: number
  prefix?: string
}) {
  const items = useChecklistItemsChildren(id)

  return items?.map((item, i) => {
    const key = [prefix, faInt(i + 1)].join('.')
    return <ChecklistItem item={item} key={key} prefix={key} />
  })
}

export function ChecklistItemsDemo() {
  return (
    <ChecklistContext items={[]}>
      <RecursiveChecklistItems prefix="مرحله" />
    </ChecklistContext>
  )
}
