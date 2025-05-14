import { useUser } from '@clerk/clerk-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRef } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useParams } from 'react-router'
import { z } from 'zod'
import UploadImage, { UploadHandle } from '../components/UploadFile'
import { useSupabase } from '../context'
import { Database } from '../context/SupabaseProvider/db'
import { Metadata } from './onboarding'

const schema = z.object({
  title: z.string().min(1, 'عنوان الزامی است'),
  image: z.string().optional().nullable(),
  text: z.string().optional().nullable(),
})
type Schema = z.infer<typeof schema>

interface ProjectFormProps {
  value: Database['public']['Tables']['projects']['Row']
}
function ProjectForm({ value }: ProjectFormProps) {
  const imageRef = useRef<UploadHandle>(null)
  const queryClient = useQueryClient()
  const { id } = value

  const supabase = useSupabase()

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: value,
    resetOptions: {
      keepIsSubmitSuccessful: false,
    },
  })

  const mutation = useMutation({
    mutationFn: async (data: Schema) => {
      await supabase
        .from('projects')
        .update({
          title: data.title,
          text: data.text,
          image: data.image,
        })
        .eq('id', id)
    },
    onSuccess: () => {
      form.reset()
      queryClient.invalidateQueries({ queryKey: ['projects', id] })
    },
  })

  const handleSbmit = (data: Schema) => {
    imageRef.current?.upload()
    mutation.mutate(data)
  }
  return (
    <div>
      <form className="px-2" onSubmit={form.handleSubmit(handleSbmit)}>
        <fieldset className="fieldset border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">
            ویرایش پروژه {value.title}
          </legend>
          <label className="label">تصویر</label>
          <Controller
            name="image"
            control={form.control}
            // defaultValue=
            render={({ field }) => (
              <UploadImage
                {...field}
                ref={imageRef}
                value={field.value || undefined}
                folder={`project_${value.id}`}
              />
            )}
          />
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
            className="textarea min-h-64 w-full"
            placeholder="توضیحات پروژه"
            {...form.register('text')}
          />

          <button className="btn btn-neutral mt-4" type="submit">
            ذخیره
          </button>
        </fieldset>
      </form>
    </div>
  )
}

interface ProjectEditProps {
  id?: number
}

export default function ProjectEdit({ id: pid }: ProjectEditProps) {
  const params = useParams<'id'>()
  const { user } = useUser()
  const { defaultPrj } = (user?.unsafeMetadata ?? {}) as Partial<Metadata>

  const id = pid ?? Number(params.id ?? defaultPrj ?? '0')

  const supabase = useSupabase()
  const q = useQuery({
    queryKey: ['projects', id],
    enabled: !!id,
    async queryFn() {
      const { data } = await supabase.from('projects').select().eq('id', id)
      return data?.[0]
    },
  })

  return q.data ? <ProjectForm value={q.data} /> : null
}
