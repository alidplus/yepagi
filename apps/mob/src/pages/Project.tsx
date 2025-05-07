export default function Home() {
  return (
    <div className="-mx-2 flex flex-col gap-2">
      <figure className="relative block">
        <img src="/mocks/proj.jpg" alt="Shoes" />
        <div className="prose bg-base-content/40 prose-headings:text-white absolute bottom-0 w-full p-4">
          <h1>البرز</h1>
        </div>
      </figure>
      <div className="tabs tabs-lift sticky top-0">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="توضیحات"
        />
        <div className="tab-content border-t-base-300 bg-base-100 rounded-t-none p-4">
          {article}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="زمانبندی"
          defaultChecked
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

const article = (
  <article className="proce">
    <p className="lead">مجتمع تجاری مسکونی البرز</p>

    <p className="text-justify">
      پروژه البرز با قرارگیری در یکی از بهترین موقعیت های منطقه ۲۲ تهران با
      استقبال خوبی از طرف خریداران روبرو شده است موقعیت قرارگیری پروژه البرز
      به‌عنوان یکی از بهترین مناطق شهرک گلستان برای سرمایه‌گذاری شناخته می‌شود
      همچنین دارا بودن سهم تجاری در این پروژه فرصت جذابی برای سرمایه‌گذاری در
      ملک برای افراد به وجود آورده است. منطقه ۲۲ به علت پیشرفت و دارا بودن
      امکانات مناسب شهری بسیار مورد توجه متقاضیان حوزه املاک می باشد. این منطقه
      از تهران به علت کوهپایه‌ای بودن و قرارگرفتن در کنار پارک جنگلی چیتگر و
      مجموعه‌های بزرگ دیگر مانند: مجموعه ورزشی آزادی و مجموعه تفریحی ارم، از
      دیرباز منطقه‌ای جذاب چه برای سازندگان و چه برای خریداران ملک بوده است.
      پروژه البرز نیز به‌عنوان یکی از پروژه‌های جدید در این منطقه موقعیتی بی
      نظیری برای سرمایه‌گذاری به شمار می‌رود . همچنین قرارگیری این پروژه دقیقا
      روبروی بیمارستان برکت امتیاز خوبی برای سهام داران تجاری این مجموعه می
      باشد. جذاب‌ترین و بهترین نقطه برای گسترش تهران قسمت شمال غربی آن است که هم
      آب‌وهوای مناسبی دارد و هم‌زمین‌های زیادی برای ساخت پروژه‌های جدید برای
      پاسخگویی به نیاز مردم در این کلان‌شهر را دارد.
    </p>
  </article>
)

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
