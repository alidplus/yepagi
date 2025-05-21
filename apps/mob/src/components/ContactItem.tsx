import { useUser } from '@clerk/clerk-react'
import { Icon } from '@repo/ui.icons'
import { cn } from '@repo/utils'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useLongPress } from 'use-long-press'
import { useSupabase } from '../context'
import { Database } from '../context/SupabaseProvider/db'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type ContactsKeys = 'name' | 'email' | 'tel' | 'address' | 'icon'
const contactProps: ContactsKeys[] = ['name', 'email', 'tel', 'address', 'icon']

interface ContactAddress {
  addressLine?: string
  city?: string
  country?: string
  dependentLocality?: string
  organization?: string
  phone?: string
  postalCode?: string
  recipient?: string
  region?: string
  sortingCode?: string
}

interface FullContactApi {
  icon: Blob[]
  name: string[]
  email: string[]
  tel: string[]
  address: ContactAddress[]
}

type ContactRawData = Pick<FullContactApi, (typeof contactProps)[number]>
export type ContactData = Partial<Record<(typeof contactProps)[number], string>>

interface ContactApi {
  select(
    fields: ContactsKeys[],
    options?: { multi: true }
  ): Promise<ContactRawData[]>
}

type AsRole = Database['public']['Enums']['ContactTypes']

interface Props {
  className?: string
  value?: Partial<Database['public']['Tables']['contacts']['Row']>
  as: AsRole
  projectId: number
}

const asRoleLabels: Record<AsRole, string> = {
  owner: 'مالک',
  executor: 'مجری',
  assist_executive: 'کمک مجری',
  coordinating_supervisor: 'ناظر هماهنگ کننده',
  architectural_supervisor: 'ناظر معماری',
  structural_supervisor: 'ناظر سازه',
  mechanical_supervisor: 'ناظر مکانیک',
  electrical_supervisor: 'ناظر برق',
  surveying_supervisor: 'ناظر نقشه برداری',
  urban_and_traffic_supervisor: 'ناظر شهرسازی و ترافیک',
}

const ContactContent = ({ value, as }: Pick<Props, 'as' | 'value'>) => {
  return (
    <>
      {value?.icon || value?.name ? (
        <div className="avatar avatar-placeholder">
          <div className="bg-neutral text-neutral-content rounded-box size-10">
            {value.icon ? (
              <img src="https://img.daisyui.com/images/profile/demo/superperson@192.webp" />
            ) : (
              // <img src={value.icon}/>
              <span className="text-xs">
                {value.name?.slice(0, 2).toUpperCase()}
              </span>
            )}
          </div>
        </div>
      ) : (
        <Icon
          name="administrator"
          className={cn('size-8', { 'opacity-10': !value })}
        />
      )}
      <div className={cn('flex flex-col justify-center', {})}>
        {value?.name ? <div>{value?.name}</div> : null}
        <div className="text-xs font-semibold uppercase opacity-75">
          {asRoleLabels[as]}
        </div>
      </div>
    </>
  )
}

const ContactItem = ({ className, value, as, projectId }: Props) => {
  const queryClient = useQueryClient()
  const { id } = value ?? {}

  const hasValue = !!id
  const hasContactApi = 'contacts' in navigator
  const hasOptions = hasContactApi || hasValue
  const supabase = useSupabase()
  const { user } = useUser()

  const [open, setOpen] = useState<0 | 1 | 2>(0)
  const handlers = useLongPress(async () => {
    setOpen(1)
  })

  const popContactPicker = async () => {
    if ('contacts' in navigator) {
      const contactApi = navigator.contacts as ContactApi
      try {
        if (!user) throw ''
        const contacts = await contactApi.select(contactProps)
        saveMutation.mutate({
          ...prepareContact(contacts[0]),
          createdBy: user.id!,
        })
      } catch (e: unknown) {
        toast.error(`Err: ${String(e)}`)
      }
    } else {
      toast.error('سرویس انتخاب مخاطبین در دسترس نیست')
    }
  }

  const saveMutation = useMutation({
    mutationFn: async (
      data: Database['public']['Tables']['contacts']['Insert']
    ) => {
      const table = supabase.from('contacts')
      if (hasValue) {
        await table
          .update({
            name: data.name,
            tel: data.tel,
            address: data.address,
          })
          .eq('id', id)
      } else {
        const contact = await table
          .insert({
            name: data.name,
            tel: data.tel,
            address: data.address,
            createdBy: user!.id,
          })
          .select('id')

        const contactId = contact.data?.[0]?.id
        console.log('inserted', contact, contactId)
        if (contactId) {
          await supabase.from('project_contacts').insert({
            contactId,
            projectId,
            createdBy: user!.id,
            as,
          })
        }
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects', projectId] })
      toast.success('با موفقیت ذخیره شد')
    },
  })

  const removeMutation = useMutation({
    mutationFn: async () => {
      if (!id) throw 'id not exists'
      return await supabase.from('contacts').delete().eq('id', id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects', projectId] })
    },
  })

  const deleteConfirmed = () => {
    toast.custom(
      (t) => {
        function handleDissmiss() {
          toast.dismiss(t.id)
        }
        function handleDelete() {
          toast.remove(t.id)
          toast.promise(
            removeMutation.mutateAsync(),
            {
              loading: 'در حال حذف...',
              success: 'با موفقیت حذف شد',
              error: 'خطایی رخ داد!',
            },
            { duration: 1000 }
          )
        }
        return (
          <div role="alert" className="alert alert-warning alert-soft">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <div className="w-full">آیا مطمين هستید؟</div>
            <div className="flex gap-4">
              <button
                className="btn btn-sm btn-success btn-soft"
                onClick={handleDissmiss}
              >
                نخیر!
              </button>
              <button className="btn btn-sm btn-error" onClick={handleDelete}>
                بله!
              </button>
            </div>
          </div>
        )
      },
      { duration: Infinity }
    )
  }

  const handleSbmit = (
    data: Database['public']['Tables']['contacts']['Insert']
  ) => {
    setOpen(0)
    saveMutation.mutate?.(data)
  }
  return (
    <li className={cn('list-row items-center', className)} {...handlers()}>
      <ContactContent value={value} as={as} />
      <a
        href={value?.email ? `mailto:${value?.email}` : undefined}
        className={cn('btn btn-square btn-ghost', {
          'btn-disabled': !value?.email,
          hidden: !value,
        })}
      >
        <Icon name="email" className="size-6" />
      </a>
      <a
        href={value?.tel ? `tel:${value?.tel}` : undefined}
        className={cn('btn btn-square btn-ghost', {
          'btn-disabled': !value?.tel,
          hidden: !value,
        })}
      >
        <Icon name="call" className="size-6" />
      </a>
      {!value ? (
        <div className="text-xs italic opacity-50">( مشخصات ثبت نشده )</div>
      ) : null}

      <dialog
        className={cn('modal modal-bottom', { 'modal-open': !!open })}
        role="dialog"
      >
        <div className="modal-box p-0">
          {/* if there is a button in form, it will close the modal */}
          <button
            className="btn btn-sm btn-circle btn-soft absolute top-2 right-2"
            onClick={() => setOpen(0)}
          >
            <Icon name="dismiss" className="size-4" />
          </button>
          <div className="divider">مشخصات {asRoleLabels[as]}</div>
          {open === 1 && hasOptions ? (
            <div className="modal-box flex w-full flex-col gap-3 pt-0">
              <button
                className={cn('btn btn-neutral', { hidden: !hasContactApi })}
                onClick={() => {
                  setOpen(0)
                  popContactPicker()
                }}
                type="button"
                disabled={!hasContactApi}
              >
                انتخاب از لیست مخاطبین
              </button>
              <button
                className="btn btn-neutral"
                type="button"
                onClick={() => setOpen(2)}
              >
                ثبت اطلاعات
              </button>
              <button
                className="btn btn-error"
                type="button"
                onClick={() => {
                  setOpen(0)
                  deleteConfirmed()
                }}
                disabled={!hasValue}
              >
                حذف
              </button>
            </div>
          ) : (
            <div className="modal-box w-full pt-0">
              <ContactForm defaultValues={value} onSubmit={handleSbmit} />
            </div>
          )}
        </div>
        <div
          className="modal-backdrop"
          onClick={() => {
            setOpen(0)
          }}
        ></div>
      </dialog>
    </li>
  )
}

const schema = z.object({
  name: z.string().optional().nullable(),
  tel: z.string().optional().nullable(),
  email: z.string().email().optional().nullable(),
  address: z.string().optional().nullable(),
})
type Schema = z.infer<typeof schema>

interface ContactFormProps {
  defaultValues?: Partial<Database['public']['Tables']['contacts']['Row']>
  onSubmit?(data: Schema): void
}
export function ContactForm({
  defaultValues = {},
  onSubmit,
}: ContactFormProps) {
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues,
    resetOptions: {
      keepIsSubmitSuccessful: false,
    },
  })

  const handleSbmit = (data: Schema) => {
    onSubmit?.(data)
    form.reset()
  }
  return (
    <form onSubmit={form.handleSubmit(handleSbmit)}>
      <div className="fieldset flex flex-col">
        <label className="label mb-2">نام</label>
        <input
          type="text"
          className="input mb-2 w-full"
          {...form.register('name')}
        />

        <label className="label mb-2">تلفن</label>
        <label className="input mb-2 w-full" dir="ltr">
          +98
          <input
            type="tel"
            className="w-full"
            placeholder="9xxxxxxxxx"
            {...form.register('tel')}
          />
        </label>

        <label className="label mb-2">ایمیل</label>
        <label className="input mb-2 w-full" dir="ltr">
          <input
            type="email"
            className="w-full"
            placeholder="name@example.com"
            {...form.register('email')}
          />
        </label>

        <label className="label mb-2">آدرس</label>
        <textarea
          className="textarea mb-2 min-h-16 w-full"
          placeholder="آدرس"
          {...form.register('address')}
        />

        <button className="btn btn-neutral" type="submit">
          ذخیره
        </button>
      </div>
    </form>
  )
}

function prepareContact(c: ContactRawData): ContactData {
  return {
    name: c.name?.join(' '),
    tel: c.tel[0],
    email: c.email[0],
    address: c.address[0]?.addressLine,
    icon: c.icon[0] ? URL.createObjectURL(c.icon[0]) : undefined,
  }
}

export default ContactItem
