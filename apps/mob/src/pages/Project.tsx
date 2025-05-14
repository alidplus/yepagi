import { useQuery } from '@tanstack/react-query'
import { useSupabase } from '../context'
import { Metadata } from './onboarding'
import { useUser } from '@clerk/clerk-react'
import { TwicPicture } from '@twicpics/components/react'
import { Icon } from '@repo/ui.icons'
import { Link, useParams } from 'react-router'

export default function Projects() {
  const params = useParams()
  const { user } = useUser()
  const { defaultPrj } = (user?.unsafeMetadata ?? {}) as Partial<Metadata>

  const id = Number(params[0]?.replace('/', '') ?? defaultPrj ?? '0')

  const supabase = useSupabase()
  const q = useQuery({
    queryKey: ['projects', id],
    enabled: !!id,
    async queryFn() {
      const { data } = await supabase.from('projects').select().eq('id', id)
      return data?.[0]
    },
  })
  return (
    <div className="-mx-2 flex flex-col gap-2">
      <figure className="relative block">
        <TwicPicture src={q.data?.image || '404.png'} ratio="16/9" />
        <div className="prose bg-base-content/40 prose-headings:text-accent-content absolute bottom-0 w-full p-4">
          <h1>{q.data?.title}</h1>
        </div>
        <div className="absolute top-0 flex w-full gap-3 px-3">
          <Link
            to={`/project/edit/${id}`}
            className="btn btn-ghost btn-sm btn-primary btn-square"
          >
            <Icon
              name="administrator"
              className="size-6 fill-current text-black"
            />
          </Link>
        </div>
      </figure>
      <div className="tabs tabs-lift sticky top-0">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="توضیحات"
          defaultChecked
        />
        <div className="tab-content border-t-base-300 bg-base-100 rounded-t-none p-4">
          <article className="proce">
            <p className="lead">{q.data?.title}</p>

            <p className="text-justify">{q.data?.text}</p>
          </article>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="زمانبندی"
        />
        <div className="tab-content border-t-base-300 bg-base-100 rounded-t-none p-4">
          {timeline}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="چک‌لیست"
        />
        <div className="tab-content border-t-base-300 bg-base-100 rounded-t-none p-4">
          {checklist}
        </div>
      </div>
    </div>
  )
}

const bulletSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
      clipRule="evenodd"
    />
  </svg>
)

const date = new Intl.DateTimeFormat('fa-IR', {
  dateStyle: 'short',
}).format(new Date())

const timeline = (
  <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
    <li>
      <div className="timeline-middle">{bulletSvg}</div>
      <div className="timeline-start prose mb-6">
        <time className="italic">{date}</time>
        <div className="text-lg font-black">دیوار چینی</div>
        طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که
        محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما
        نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی
        برداشته میشود و اینکار زمان بر خواهد بود. همچنین طراح به دنبال این است
        که پس از ارایه کار نظر دیگران را در مورد طراحی جویا شود و نمی‌خواهد
        افراد روی متن های موجود تمرکز کنند.
      </div>
      <hr />
    </li>
    <li>
      <hr />
      <div className="timeline-middle">{bulletSvg}</div>
      <div className="timeline-start prose mb-6">
        <time className="italic">{date}</time>
        <div className="text-lg font-black">طبقات</div>
        طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که
        محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما
        نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی
        برداشته میشود و اینکار زمان بر خواهد بود. همچنین طراح به دنبال این است
        که پس از ارایه کار نظر دیگران را در مورد طراحی جویا شود و نمی‌خواهد
        افراد روی متن های موجود تمرکز کنند.
      </div>
      <hr />
    </li>
    <li>
      <hr />
      <div className="timeline-middle">{bulletSvg}</div>
      <div className="timeline-start prose mb-6">
        <time className="italic">{date}</time>
        <div className="text-lg font-black">طبقه همکف</div>
        طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که
        محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما
        نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی
        برداشته میشود و اینکار زمان بر خواهد بود. همچنین طراح به دنبال این است
        که پس از ارایه کار نظر دیگران را در مورد طراحی جویا شود و نمی‌خواهد
        افراد روی متن های موجود تمرکز کنند.
      </div>
      <hr />
    </li>
    <li>
      <hr />
      <div className="timeline-middle">{bulletSvg}</div>
      <div className="timeline-start prose mb-6">
        <time className="italic">{date}</time>
        <div className="text-lg font-black">پی ریزی</div>
        طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که
        محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما
        نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی
        برداشته میشود و اینکار زمان بر خواهد بود. همچنین طراح به دنبال این است
        که پس از ارایه کار نظر دیگران را در مورد طراحی جویا شود و نمی‌خواهد
        افراد روی متن های موجود تمرکز کنند.
      </div>
      <hr />
    </li>
    <li>
      <hr />
      <div className="timeline-middle">{bulletSvg}</div>
      <div className="timeline-start prose mb-6">
        <time className="italic">{date}</time>
        <div className="text-lg font-black">گودبرداری</div>
        طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که
        محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما
        نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی
        برداشته میشود و اینکار زمان بر خواهد بود. همچنین طراح به دنبال این است
        که پس از ارایه کار نظر دیگران را در مورد طراحی جویا شود و نمی‌خواهد
        افراد روی متن های موجود تمرکز کنند.
      </div>
    </li>
  </ul>
)

const checklist = (
  <div className="overflow-x-auto">
    <table className="table">
      <tbody>
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <td>
            <div className="">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
            </div>
          </td>
          <td>
            مهندس ایوب اصل
            <br />
            <span className="badge badge-primary badge-sm">تکنسین برق</span>
          </td>
        </tr>
        {/* row 2 */}
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <td>
            <div className="">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
            </div>
          </td>
          <td>
            شرکت سازندگان سهند
            <br />
            <span className="badge badge-ghost badge-sm">پیمانکار</span>
          </td>
        </tr>
        {/* row 3 */}
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <td>
            <div className="">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
            </div>
          </td>
          <td>
            مهندس پورمختار
            <br />
            <span className="badge badge-ghost badge-sm">مجری</span>
          </td>
        </tr>
        {/* row 4 */}
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <td>
            <div className="">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
            </div>
          </td>
          <td>
            مهندس مهندس
            <br />
            <span className="badge badge-error badge-sm">مهندس ناظر</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)
