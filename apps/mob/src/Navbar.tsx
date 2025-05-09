function App() {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 sticky top-0 z-10 w-full">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2">ساخت هوشمند</div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <a>Navbar Item 1</a>
              </li>
              <li>
                <a>Navbar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hero bg-base-200">
          <div className="hero-content prose flex-col lg:flex-row">
            <img
              src="/arch-eng.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">نرم افزار مهندسی ساخت هوشمند</h1>
              <p className="py-6">
                با کمال خوشحالی به اطلاع می‌رسانیم که نرم‌افزار جدید و پیشرفته
                دستیار مهندسی ما به‌زودی منتشر خواهد شد! این نرم‌افزار با هدف
                تسهیل فرآیندهای مهندسی و افزایش بهره‌وری در پروژه‌های مختلف
                طراحی شده است.
              </p>
              <h2>ویژگی‌های کلیدی نرم‌افزار:</h2>
              <p className="py-6">
                رابط کاربری جذاب و کاربرپسند: طراحی مدرن و ساده که به شما امکان
                می‌دهد به راحتی به ابزارها و امکانات دسترسی پیدا کنید. تحلیل و
                شبیه‌سازی پیشرفته: ابزارهای قدرتمند برای تحلیل داده‌ها و
                شبیه‌سازی سناریوهای مختلف. مدیریت پروژه: قابلیت‌های جامع برای
                برنامه‌ریزی، پیگیری و مدیریت پروژه‌ها به‌صورت کارآمد. پشتیبانی
                از چندین فرمت: امکان کار با انواع فرمت‌های فایل مهندسی و تبادل
                اطلاعات به‌راحتی. آموزش و پشتیبانی: منابع آموزشی و پشتیبانی ۲۴
                ساعته برای کمک به شما در هر مرحله. ما به شما این اطمینان را
                می‌دهیم که این نرم‌افزار به شما کمک خواهد کرد تا پروژه‌های خود
                را با دقت و سرعت بیشتری به انجام برسانید.
              </p>
              <p className="py-6">
                از حمایت و اعتماد شما سپاسگزاریم و منتظر نظرات و پیشنهادات شما
              </p>
              <p className="py-6">هستیم! با احترام، خط سوم</p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
        <div className="stats stats-vertical lg:stats-horizontal shadow">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp" />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>
        </div>
        <div className="px-2 py-8">
          <div className="stack w-full">
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h2 className="card-title">Notification 1</h2>
                <p>You have 3 unread messages. Tap here to see.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h2 className="card-title">Notification 2</h2>
                <p>You have 3 unread messages. Tap here to see.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h2 className="card-title">Notification 3</h2>
                <p>You have 3 unread messages. Tap here to see.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Page content here */}
        <div className="mb-12"></div>
        {inner}
      </div>
      <div className="drawer-side z-20">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="card menu bg-base-200 min-h-full w-80">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body flex flex-1 flex-col p-2">
            <h2 className="card-title">Card Title</h2>
            <ul className="flex-1">
              {/* Sidebar content here */}
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const inner = (
  <div className="dock">
    <button>
      <svg
        className="size-[1.2em]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
          <polyline
            points="1 11 12 2 23 11"
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="2"
          ></polyline>
          <path
            d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7"
            fill="none"
            stroke="currentColor"
            strokeLinecap="square"
            strokeMiterlimit="10"
            strokeWidth="2"
          ></path>
          <line
            x1="12"
            y1="22"
            x2="12"
            y2="18"
            fill="none"
            stroke="currentColor"
            strokeLinecap="square"
            strokeMiterlimit="10"
            strokeWidth="2"
          ></line>
        </g>
      </svg>
      <span className="dock-label">خانه</span>
    </button>

    <button className="dock-active">
      <svg
        className="size-[1.2em]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
          <polyline
            points="3 14 9 14 9 17 15 17 15 14 21 14"
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="2"
          ></polyline>
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            ry="2"
            fill="none"
            stroke="currentColor"
            strokeLinecap="square"
            strokeMiterlimit="10"
            strokeWidth="2"
          ></rect>
        </g>
      </svg>
      <span className="dock-label">صندوق</span>
    </button>

    <button>
      <svg
        className="size-[1.2em]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
          <circle
            cx="12"
            cy="12"
            r="3"
            fill="none"
            stroke="currentColor"
            strokeLinecap="square"
            strokeMiterlimit="10"
            strokeWidth="2"
          ></circle>
          <path
            d="m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="square"
            strokeMiterlimit="10"
            strokeWidth="2"
          ></path>
        </g>
      </svg>
      <span className="dock-label">تنضیمات</span>
    </button>
  </div>
)

export default App
