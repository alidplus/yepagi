import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from '@repo/utils'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRef } from 'react'
import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'
import UploadImage, { UploadHandle } from '../components/UploadFile'
import { useSupabase } from '../context'
import { Database } from '../context/SupabaseProvider/db'
import SafeImage from '../components/SafeImage'
import { useNavigate } from 'react-router'
import { useUser } from '@clerk/clerk-react'

const schema = z.object({
  image: z.string().optional().nullable(),
  code: z.string().min(1, 'شماره پرونده الزامی است'),
  title: z.string().min(1, 'عنوان الزامی است'),
  text: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
})
type Schema = z.infer<typeof schema>

interface ProjectFormProps {
  value?: Database['public']['Tables']['projects']['Row']
  onFinish?: VoidFunction
}
export default function ProjectForm({ value, onFinish }: ProjectFormProps) {
  const imageRef = useRef<UploadHandle>(null)
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { user } = useUser()
  const id = value?.id

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
      const projects = supabase.from('projects')
      const payload = {
        title: data.title,
        text: data.text,
        code: data.code,
        image: data.image,
        address: data.address,
      }
      let res
      if (id)
        res = await projects
          .update({ ...payload })
          .eq('id', id)
          .select()
      else
        res = await projects
          .insert({ ...payload, createdBy: user!.id })
          .select()
      return res
    },
    onSuccess: (prj) => {
      form.reset()
      toast.success('با موفقیت ذخیره شد')
      if (id) {
        queryClient.invalidateQueries({ queryKey: ['projects', id] })
      } else {
        queryClient.invalidateQueries({ queryKey: ['projects'] })
      }
      if (onFinish) {
        onFinish?.()
      } else if (!id && prj.data?.length) {
        navigate(`/project/${prj.data[0].id}`)
      } else {
        console.log('else', { prj, id })
      }
    },
  })

  const handleSbmit = (data: Schema) => {
    imageRef.current?.upload()
    mutation.mutate(data)
  }
  return (
    <form
      className="grid h-full px-2"
      onSubmit={form.handleSubmit(handleSbmit)}
    >
      <div className="fieldset rounded-box grid-rows-[min-content_1fr_min-content] pb-4">
        <legend className="fieldset-legend static">اطلاعات پرونده</legend>
        <div className={cn('overflow-y-auto')}>
          {id ? (
            <div className="w-1/2">
              <label className="label mb-2">تصویر شاخص</label>
              <Controller
                name="image"
                control={form.control}
                // defaultValue=
                render={({ field }) => (
                  <UploadImage
                    {...field}
                    ref={imageRef}
                    className="mb-2 w-full"
                    value={field.value || undefined}
                    path={`projects/project_${value.id}`}
                  >
                    {value ? (
                      <SafeImage
                        data={value}
                        path="image"
                        ratio="16/9"
                        className="w-full"
                      />
                    ) : null}
                  </UploadImage>
                )}
              />
            </div>
          ) : (
            <div className="w-1/2">
              <label className="label mb-2">تصویر شاخص</label>
              <Controller
                name="image"
                control={form.control}
                // defaultValue=
                disabled
                render={({ field }) => (
                  <UploadImage
                    {...field}
                    ref={imageRef}
                    className="mb-2 w-full"
                    value={field.value || undefined}
                    path={`projects/project_?`}
                  ></UploadImage>
                )}
              />
            </div>
          )}

          <label className="label mb-2">عنوان</label>
          <input
            type="text"
            className="input mb-2 w-full"
            placeholder="پروژه فوق العاده من"
            {...form.register('title', {
              required: 'عنوان الزامی است',
            })}
          />

          <label className="label mb-2">ش. پرونده</label>
          <input
            type="text"
            className="input mb-2 w-full"
            {...form.register('code', {
              required: 'شماره پرونده الزامی است',
            })}
          />

          <label className="label mb-2">آدرس</label>
          <textarea
            className="textarea mb-2 min-h-16 w-full"
            placeholder="آدرس پروژه"
            {...form.register('address')}
          />

          <label className="label mb-2">توضیحات</label>
          <textarea
            className="textarea mb-2 min-h-48 w-full"
            placeholder="توضیحات پروژه"
            {...form.register('text')}
          />
        </div>

        <button className="btn btn-neutral" type="submit">
          ذخیره
        </button>
      </div>
    </form>
  )
}
