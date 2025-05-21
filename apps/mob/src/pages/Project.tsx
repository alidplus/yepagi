import { useUser } from '@clerk/clerk-react'
import { useInView } from '@react-spring/web'
import { Icon } from '@repo/ui.icons'
import { cn } from '@repo/utils'
import { useQuery } from '@tanstack/react-query'
import { lazy, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router'
import ChecklistContext from '../components/checklist/ChecklistContext'
import { RecursiveChecklistItems } from '../components/checklist/ChecklistItem'
import ContactItem from '../components/ContactItem'
import SafeImage from '../components/SafeImage'
import { useSupabase } from '../context'
import { Database } from '../context/SupabaseProvider/db'
import { faInt } from '../utils/formaters'
import { Metadata } from './onboarding'

const ProjectForm = lazy(() => import('./ProjectEdit'))

type AsRole = Database['public']['Enums']['ContactTypes']

export default function Projects() {
  const [ref, inView] = useInView({ rootMargin: '10% 0%' })
  const navigate = useNavigate()
  const { user } = useUser()
  const { defaultPrj } = (user?.unsafeMetadata ?? {}) as Partial<Metadata>
  const { id: paramId = defaultPrj, state } = useParams<'id' | 'state'>()
  const role = user?.unsafeMetadata?.role ?? 'design'

  const id = Number(paramId ?? '0')
  const setRouteState = (
    s?: 'edit' | 'people' | 'chat' | `chk-${number}` | '',
    replace = false
  ) => {
    navigate('/project/' + id + (s ? '/' + s : ''), { replace })
  }

  const supabase = useSupabase()

  const q = useQuery({
    queryKey: ['projects', id],
    enabled: !!id,
    async queryFn() {
      const { data } = await supabase
        .from('projects')
        .select(
          `
            *,
            project_contacts ( as, contacts ( id, name, tel, email, address, icon ) ),
            checklists (*, items:checklist_items (*, data:checklist_data (*), submit:checklist_submits (*)))
          `
        )
        .eq('id', id)
      return data?.[0]
    },
  })

  // console.log(q.data)

  const contacts = useMemo(() => {
    const data = q.data?.project_contacts ?? []
    function find(key: AsRole) {
      return data.find((c) => c.as === key)?.contacts || undefined
    }
    return {
      count: data.length,
      owner: find('owner'),
      executor: find('executor'),
      assist_executive: find('assist_executive'),
      coordinating_supervisor: find('coordinating_supervisor'),
      architectural_supervisor: find('architectural_supervisor'),
      structural_supervisor: find('structural_supervisor'),
      mechanical_supervisor: find('mechanical_supervisor'),
      electrical_supervisor: find('electrical_supervisor'),
      surveying_supervisor: find('surveying_supervisor'),
      urban_and_traffic_supervisor: find('urban_and_traffic_supervisor'),
    }
  }, [q.data])

  if (!q.data) return null

  const isDefaultReouteState =
    !state ||
    !(['people', 'edit', 'chat'].includes(state) || state.startsWith('chk-'))

  return (
    <div className="flex flex-col">
      <figure className="relative block">
        <div
          className={cn(
            'badge badge-info absolute end-2 top-2',
            !q.data.code ? 'italic opacity-25' : ''
          )}
        >
          ش‌پ: {q.data.code ?? <span>ثبت نشده</span>}
        </div>
        <SafeImage data={q.data} path="image" ratio="16/9" />
        <article className="prose to-base-300 absolute bottom-0 flex h-1/3 w-full flex-col justify-end bg-linear-to-b p-2">
          <div className="w-full" ref={ref}></div>
          <h1 className="truncate">{q.data.title}</h1>
        </article>
        {!inView ? (
          <article className="prose motion-preset-slide-up motion-duration-75 motion-ease-in fixed start-16 top-0 z-50 w-2/3 py-4">
            <h3 className="w-full truncate">{q.data.title}</h3>
          </article>
        ) : null}
      </figure>
      <div className="sticky top-0 z-10 w-full overflow-x-auto">
        <div
          role="tablist"
          className="tabs tabs-lift bg-base-300 min-w-max ps-4 pt-1"
        >
          <a
            role="tab"
            onClick={() => setRouteState('', true)}
            className={cn('tab', {
              'tab-active': isDefaultReouteState || state === 'edit',
            })}
          >
            پرونده
          </a>
          <a
            role="tab"
            onClick={() => setRouteState('people', true)}
            className={cn('tab', {
              'tab-active': state === 'people',
              indicator: contacts.count > 0,
            })}
          >
            افراد
            {contacts.count ? (
              <span className="indicator-item badge badge-xs badge-neutral start-auto -end-3 top-2">
                {faInt(contacts.count)}
              </span>
            ) : null}
          </a>
          {q.data.checklists.map((checklist) => (
            <a
              key={`chk-${checklist.id}`}
              role="tab"
              onClick={() => setRouteState(`chk-${checklist.id}`, true)}
              className={cn('tab', {
                'tab-active': state === `chk-${checklist.id}`,
                indicator: contacts.count > 0,
              })}
            >
              {checklist.title}
            </a>
          ))}
          <button className="btn btn-sm btn-ghost btn-neutral ms-auto me-4">
            <Icon name="plus" className="size-6" />
          </button>
        </div>
      </div>
      <div className="grid min-h-[calc(100vh_-_98px)]">
        <div
          className={cn('tab-content bg-base-100 p-4', {
            block: isDefaultReouteState,
          })}
        >
          <div className="flex items-center justify-end">
            <button
              onClick={() => setRouteState('edit')}
              className="btn btn-soft btn-sm btn-info btn-square"
            >
              <Icon name="edit" className="size-6" />
            </button>
          </div>
          <article className="prose select-info contents text-justify select-auto">
            {q.data.address && (
              <p>
                <strong className="pe-2">آدرس کارگاه:</strong>
                <span>{q.data.address}</span>
              </p>
            )}
            {q.data.text && (
              <>
                <dt>
                  <div className="divider">توضیحات</div>
                </dt>
                <dd className="px-0">
                  <p>{q.data.text}</p>
                </dd>
              </>
            )}
          </article>
        </div>
        <div
          className={cn('tab-content bg-base-100 p-4', {
            block: state === 'edit',
          })}
        >
          {q.data && (
            <ProjectForm value={q.data} onFinish={() => navigate(-1)} />
          )}
        </div>
        <div
          className={cn('tab-content bg-base-100 p-4', {
            block: state === 'people',
          })}
        >
          <ul className="list bg-base-100 rounded-box shadow-md">
            <li className="p-4 pb-2 text-xs tracking-wide opacity-60">
              برای ویرایش هر یک از نقش ها آن را لمس کنید و نگهدارید
            </li>
            <ContactItem
              as="owner"
              value={contacts.owner}
              projectId={q.data.id}
            />
            <ContactItem
              as="executor"
              value={contacts.executor}
              projectId={q.data.id}
            />
            {role === 'execution' && (
              <ContactItem
                as="assist_executive"
                value={contacts.assist_executive}
                projectId={q.data.id}
              />
            )}
            <ContactItem
              as="coordinating_supervisor"
              value={contacts.coordinating_supervisor}
              projectId={q.data.id}
            />
            {role === 'execution' && (
              <>
                <ContactItem
                  as="architectural_supervisor"
                  value={contacts.architectural_supervisor}
                  projectId={q.data.id}
                />
                <ContactItem
                  as="structural_supervisor"
                  value={contacts.structural_supervisor}
                  projectId={q.data.id}
                />
                <ContactItem
                  as="mechanical_supervisor"
                  value={contacts.mechanical_supervisor}
                  projectId={q.data.id}
                />
                <ContactItem
                  as="electrical_supervisor"
                  value={contacts.electrical_supervisor}
                  projectId={q.data.id}
                />
                <ContactItem
                  as="surveying_supervisor"
                  value={contacts.surveying_supervisor}
                  projectId={q.data.id}
                />
                <ContactItem
                  as="urban_and_traffic_supervisor"
                  value={contacts.urban_and_traffic_supervisor}
                  projectId={q.data.id}
                />
              </>
            )}
          </ul>
        </div>

        {q.data.checklists.map((checklist) => (
          <div
            key={`chk-${checklist.id}`}
            className={cn('tab-content bg-base-100 pt-4', {
              block: state === `chk-${checklist.id}`,
            })}
          >
            <ChecklistContext
              items={checklist.items}
              onSave={q.refetch.bind(q)}
            >
              <RecursiveChecklistItems prefix="مرحله" />
            </ChecklistContext>
          </div>
        ))}
      </div>
    </div>
  )
}
