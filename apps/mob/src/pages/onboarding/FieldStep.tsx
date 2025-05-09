import { animated, useSpring } from '@react-spring/web'
import { cn } from '@repo/utils'
import { useEffect } from 'react'
import { Metadata } from '.'

interface StepProps {
  minify?: boolean
  goNext: VoidFunction
  goBack: VoidFunction
  value: Metadata['field']
  onChange: (s: Metadata['field']) => void
}
export default function FieldStep({
  minify,
  goNext,
  goBack,
  value,
  onChange,
}: StepProps) {
  const [springs, api] = useSpring(() => ({
    from: { height: 0 },
  }))

  useEffect(() => {
    if (minify) {
      api.start({
        to: {
          height: 0,
        },
      })
    } else {
      api.start({
        to: {
          height: 380,
        },
      })
    }
  }, [minify, api])

  const handleSelect = (v: Metadata['field']) => {
    onChange(v)
    setTimeout(() => {
      goNext()
    }, 800)
  }

  return (
    <animated.div
      className="w-full overflow-hidden px-16"
      style={{ ...springs }}
    >
      <ul className="menu mb-8 w-full flex-nowrap gap-2 py-0">
        <li className="menu-title">رشته تخصصی خود را انتخاب کنید</li>
        <li>
          <a
            className={cn({ 'bg-white/10': value === 'architect' })}
            onClick={() => {
              handleSelect('architect')
            }}
          >
            {icon}
            <span>معماری</span>
          </a>
        </li>
        <li className="menu-disabled">
          <a>
            {icon}
            <span>عمران</span>
            {soon}
          </a>
        </li>
        <li className="menu-disabled">
          <a>
            {icon}
            <span>مکانیک</span>
            {soon}
          </a>
        </li>
        <li className="menu-disabled">
          <a>
            {icon}
            <span>برق</span>
            {soon}
          </a>
        </li>
        <li className="menu-disabled">
          <a>
            {icon}
            <span>نقشه برداری</span>
            {soon}
          </a>
        </li>
        <li className="menu-disabled">
          <a>
            {icon}
            <span>شهرسازی و ترافیک</span>
            {soon}
          </a>
        </li>
      </ul>
      <button
        className="btn btn-warning btn-dash btn-block mt-1 rounded-full"
        onClick={goBack}
      >
        <span>بازگشت</span>
      </button>
    </animated.div>
  )
}

const soon = (
  <div className="badge badge-warning badge-dash badge-xs">به زودی</div>
)

const icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
)
