import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'
import { useSupabase } from '../context'
import { useScript } from '../hooks/useScript'

export default function ChecklistItemDetails() {
  const { id: paramId } = useParams<'id'>()
  const id = Number(paramId ?? '0')
  const supabase = useSupabase()

  const q = useQuery({
    queryKey: ['projects', id],
    enabled: !!id,
    async queryFn() {
      const { data } = await supabase
        .from('checklist_data')
        .select()
        .eq('id', id)
      return data?.[0]
    },
  })
  useScript(
    'https://www.aparat.com/embed/kecf3ej?data[rnddiv]=84215658162&data[responsive]=yes'
  )
  return (
    <div>
      <div id="84215658162" />
      <article className="prose px-4 pt-8">
        <h1>{q.data?.title}</h1>
        <p>{q.data?.text}</p>
      </article>
    </div>
  )
}
