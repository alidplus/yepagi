import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { useSupabase } from '../context'
import { useUser } from '@clerk/clerk-react'

const schema = z.object({
  title: z.string().min(1, 'عنوان الزامی است'),
  description: z.string().optional(),
})
type Schema = z.infer<typeof schema>

export default function SupaTest() {
  return (
    <div className="flex w-full flex-col gap-3">
      <SupaTestList />
      <SupaTestForm />
    </div>
  )
}

function SupaTestForm() {
  const { user } = useUser()
  const queryClient = useQueryClient()
  const supabase = useSupabase()
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    resetOptions: {
      keepIsSubmitSuccessful: false,
    },
  })

  // const router = useRouter()
  // const trpc = useTRPC()
  // const options = trpc.auth.signin.mutationOptions({
  //   async onSuccess(data) {
  //     setToken(data.accessToken)
  //     const whoamiQueryKey = trpc.auth.whoami.queryKey()
  //     await queryClient.invalidateQueries({ queryKey: whoamiQueryKey })
  //     router.refresh()
  //   },
  //   onSettled(data, error, variables, context) {
  //     console.log({ data, error, variables, context }, 'on onSettled')
  //   },
  // })
  const mutation = useMutation({
    mutationFn: async (data: Schema) => {
      await supabase.from('projects').insert({
        title: data.title,
        text: data.description,
        created_by: user?.id,
      })
    },
    onSuccess: () => {
      form.reset()
      queryClient.invalidateQueries({ queryKey: ['projects'] })
    },
  })
  return (
    <form
      className="px-2"
      onSubmit={form.handleSubmit((data: Schema) => mutation.mutate(data))}
    >
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <legend className="fieldset-legend">پروژه جدید</legend>

        <label className="label">عنوان</label>
        <input
          type="text"
          className="input w-full"
          placeholder="پروژه فوق العاده من"
          {...form.register('title', {
            required: 'عنوان الزامی است',
          })}
        />

        <label className="label">توضیحات</label>
        <textarea
          className="textarea w-full"
          placeholder="توضیحات پروژه"
          {...form.register('description')}
        />

        <button className="btn btn-neutral mt-4">ذخیره</button>
      </fieldset>
    </form>
  )
}

function SupaTestList() {
  const supabase = useSupabase()
  const q = useQuery({
    queryKey: ['projects'],
    async queryFn() {
      const { data } = await supabase.from('projects').select()
      return data
    },
  })
  return (
    <div className="flex w-full flex-col gap-3">
      {q.data?.map((r) => <h1 key={r.id}>{r.title}</h1>)}
    </div>
  )
}
