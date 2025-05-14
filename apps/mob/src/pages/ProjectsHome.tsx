import { useQuery } from '@tanstack/react-query'
import { TwicPicture } from '@twicpics/components/react'
import { useSupabase } from '../context'
import { Link } from 'react-router'

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
    <div className="m-2 grid auto-rows-min grid-cols-2 gap-2">
      {q.data?.map((row) => (
        <Link
          key={row.id}
          className="card overflow-hidden shadow-sm dark:border dark:border-gray-700"
          to={`/project/${row.id}`}
        >
          <TwicPicture src={row.image || '404.png'} ratio="16/9" />
          <div className="card-body p-3">
            <h2 className="card-title">{row.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  )
}
