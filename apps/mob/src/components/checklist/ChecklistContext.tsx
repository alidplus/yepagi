import { useUser } from '@clerk/clerk-react'
import { animated, useSpring } from '@react-spring/web'
import { Icon } from '@repo/ui.icons'
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useSupabase } from '../../context'
import { Database } from '../../context/SupabaseProvider/db'
import { faInt } from '../../utils/formaters'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export type Status = boolean
export type StatusStateMap = number[]

interface IChecklistContext {
  dirty: boolean
  state: StatusStateMap
  setStatus: Dispatch<SetStateAction<StatusStateMap>>
  items: IChecklistItem[]
}

export type IChecklistItem =
  Database['public']['Tables']['checklist_items']['Row'] & {
    data: Database['public']['Tables']['checklist_data']['Row']
    submit: Database['public']['Tables']['checklist_submits']['Row'] | null
  }

const Context = createContext<IChecklistContext>({
  state: {},
} as IChecklistContext)

export default function ChecklistContext({
  children,
  onSave,
  items,
}: PropsWithChildren<{ items: IChecklistItem[]; onSave?: VoidFunction }>) {
  const supabase = useSupabase()
  const { user } = useUser()
  const [comment, setComment] = useState(`موارد بررسی شد و تایید می‌گردد`)
  const [showModal, setShowModal] = useState(false)
  const [springs, api] = useSpring(() => ({
    from: { bottom: -80 },
    to: { bottom: 0 },
  }))
  const [modalSprings, modalSpringsApi] = useSpring(() => ({
    from: { height: 0 },
    to: { height: 350 },
  }))
  const [status, setStatus] = useState<StatusStateMap>([])
  const ctx = useMemo<IChecklistContext>(() => {
    return {
      dirty: !!Object.keys(status).length,
      state: status,
      items,
      setStatus,
    }
  }, [status, items])
  useEffect(() => {
    if (ctx.dirty) {
      api.start({
        from: { bottom: -80 },
        to: { bottom: 0 },
      })
    } else {
      api.start({
        from: { bottom: 0 },
        to: { bottom: -80 },
      })
    }
  }, [api, ctx.dirty])
  const openModal = () => {
    setShowModal(true)
    modalSpringsApi.start({
      from: { height: 0 },
      to: { height: 350 },
    })
  }
  const closeModal = () => {
    modalSpringsApi.start({
      from: { height: 350 },
      to: { height: 0 },
      onRest() {
        setShowModal(false)
      },
    })
  }

  const mutation = useMutation({
    mutationFn: async () => {
      if (!user) throw ''
      const submits = supabase.from('checklist_submits')
      const items = supabase.from('checklist_items')
      const savedSubmit = await submits
        .insert({
          text: comment,
          createdBy: user.id,
        })
        .select()

      const submitId = savedSubmit.data?.[0].id

      await items.update({ status: 'accepted', submitId }).in('id', status)
    },
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ['projects', projectId] })
      toast.success('با موفقیت ذخیره شد')
      closeModal()
      setStatus([])
      onSave?.()
    },
  })
  return (
    <Context.Provider value={ctx}>
      {/* <pre>{JSON.stringify(status, null, 2)}</pre> */}
      <div className="pb-14">{children}</div>
      <animated.div
        role="alert"
        className="alert alert-vertical sm:alert-horizontal fixed bottom-0 block w-full"
        style={springs}
      >
        <div className="flex min-w-full items-center gap-2">
          <Icon name="signature" className="size-10" />
          <div className="text-start">
            <strong>ثبت نهایی</strong>
            <p className="text-sm">
              {faInt(Object.keys(status).length)} گزینه انتخاب شده است
            </p>
          </div>
          <div className="ms-auto flex gap-2">
            <button
              className="btn btn-sm"
              onClick={() => {
                setStatus([])
              }}
            >
              بازگشت
            </button>
            <button className="btn btn-sm btn-primary" onClick={openModal}>
              مرحله بعدی
            </button>
          </div>
        </div>
      </animated.div>
      {showModal ? (
        <div className="modal modal-open modal-bottom">
          <animated.div
            className="modal-box fixed flex flex-col gap-3"
            style={modalSprings}
          >
            <h3 className="text-lg font-bold">ثبت نهایی</h3>
            <fieldset className="fieldset flex w-full flex-1">
              <textarea
                className="textarea w-full"
                placeholder="نظر خود را یادداشت کنید"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </fieldset>
            <button
              className="btn btn-neutral btn-block"
              onClick={() => mutation.mutate()}
              disabled={mutation.isPending}
            >
              ثبت نهایی
            </button>
          </animated.div>
          <div className="modal-backdrop" onClick={closeModal}></div>
        </div>
      ) : null}
    </Context.Provider>
  )
}

export const useChecklistItemContext = (key: number) => {
  const ctx = useContext(Context)
  const value = useMemo(() => ctx.state.includes(key), [key, ctx.state])
  const setValue = useCallback(
    (s: Status) => {
      ctx.setStatus((prev) => {
        const clone = new Set(prev)
        if (s) clone.add(key)
        else clone.delete(key)
        return Array.from(clone)
      })
    },
    [ctx, key]
  )
  const common = useMemo(
    () => ({
      dirty: ctx.dirty,
    }),
    [ctx]
  )
  return useMemo(
    () => [value, setValue, common] as const,
    [value, setValue, common]
  )
}

export const useChecklistItemsChildren = (id?: number): IChecklistItem[] => {
  const ctx = useContext(Context)
  return ctx.items
    .filter((item) => item.parentId === (id ?? null))
    .sort(function (a, b) {
      return +(a.id > b.id) - +(a.id < b.id)
    })
}

type ScTup = [number, number]
export const useChecklistChildrenScoreTuple = (id: number): ScTup => {
  const ctx = useContext(Context)

  function getChildrenScoreTuples(id: number): ScTup[] {
    const children = ctx.items.filter((item) => item.parentId === (id ?? null))
    return children.map((item): ScTup => {
      const [s, l] = getChildrenScoreTuple(item.id)
      if (l === 0) {
        return [item.submitId ? 1 : 0, 1]
      }
      return [s, l]
    })
  }

  function getChildrenScoreTuple(id: number): ScTup {
    const tuples = getChildrenScoreTuples(id)
    return [tuples.filter(([scr, max]) => scr === max).length, tuples.length]
  }

  return getChildrenScoreTuple(id)
}
