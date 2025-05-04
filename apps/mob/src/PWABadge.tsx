import { useRegisterSW } from 'virtual:pwa-register/react'

function PWABadge() {
  // check for updates every hour
  const period = 60 * 60 * 1000

  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(swUrl, r) {
      if (period <= 0) return
      if (r?.active?.state === 'activated') {
        registerPeriodicSync(period, swUrl, r)
      } else if (r?.installing) {
        r.installing.addEventListener('statechange', (e) => {
          const sw = e.target as ServiceWorker
          if (sw.state === 'activated') registerPeriodicSync(period, swUrl, r)
        })
      }
    },
  })

  function close() {
    setNeedRefresh(false)
  }

  return needRefresh ? (
    <div
      className="fixed bottom-0 z-50 w-full p-4"
      role="alert"
      aria-labelledby="toast-message"
    >
      <div
        role="alert"
        className="alert alert-info alert-vertical sm:alert-horizontal shadow-2xl"
      >
        <div className="text-start">
          <h3 className="my-4 font-bold">بروزرسانی!</h3>
          <div className="text-xs">
            نسخه جدید نرم افزار در دسترس می باشد. روی گزینه بروزرسانی کلیک کنید
          </div>
        </div>
        <div className="flex w-full gap-4">
          <button
            className="btn btn-primary"
            onClick={() => updateServiceWorker(true)}
          >
            بروزرسانی
          </button>
          <button
            className="btn btn-secondary btn-outline"
            onClick={() => close()}
          >
            بعدا
          </button>
        </div>
      </div>
    </div>
  ) : null
}

export default PWABadge

/**
 * This function will register a periodic sync check every hour, you can modify the interval as needed.
 */
function registerPeriodicSync(
  period: number,
  swUrl: string,
  r: ServiceWorkerRegistration
) {
  if (period <= 0) return

  setInterval(async () => {
    if ('onLine' in navigator && !navigator.onLine) return

    const resp = await fetch(swUrl, {
      cache: 'no-store',
      headers: {
        cache: 'no-store',
        'cache-control': 'no-cache',
      },
    })

    if (resp?.status === 200) await r.update()
  }, period)
}
