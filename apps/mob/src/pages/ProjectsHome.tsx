import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router'
import SafeImage from '../components/SafeImage'
import { useSupabase } from '../context'
import { cn } from '@repo/utils'
import { Icon } from '@repo/ui.icons'

export default function ProjectsHome() {
  const supabase = useSupabase()
  const q = useQuery({
    queryKey: ['projects'],
    async queryFn() {
      const { data } = await supabase.from('projects').select()
      return data
    },
  })
  return (
    <div className="m-2 grid auto-rows-min gap-2 sm:grid-cols-2 md:grid-cols-3">
      {q.data?.map((row) => (
        <Link
          key={row.id}
          className="card relative overflow-hidden shadow-sm dark:border dark:border-gray-700"
          to={`/project/${row.id}`}
        >
          <div
            className={cn(
              'badge badge-info absolute end-2 top-2',
              !row.code ? 'italic opacity-25' : ''
            )}
          >
            ش‌پ: {row.code ?? <span>ثبت نشده</span>}
          </div>
          <SafeImage data={row} path="image" ratio="16/9" />
          <div className="card-body prose absolute bottom-0 h-1/3 w-full justify-end bg-linear-to-b to-base-300 p-2 py-3">
            <h2 className="card-title block truncate">{row.title}</h2>
          </div>
        </Link>
      ))}
      <Link to="/new/project" className="btn btn-gost btn-block">
        <Icon name="plus" className="size-6" />
        <span>ثبت پروژه جدید</span>
      </Link>
    </div>
  )
}
