import { SignedIn, SignedOut } from '@clerk/clerk-react'
import { animated, useSpring } from '@react-spring/web'
import { useEffect } from 'react'
import { Link } from 'react-router'

interface StepProps {
  minify: boolean
  goBack: VoidFunction
  goNext: VoidFunction
}
export default function FinalStep({ minify, goNext }: StepProps) {
  const [springs, api] = useSpring(() => ({
    from: { height: 50 },
  }))
  useEffect(() => {
    if (minify) {
      api.start({
        from: {
          height: 50,
        },
        to: {
          height: 0,
        },
      })
    } else {
      api.start({
        from: {
          height: 0,
        },
        to: {
          height: 50,
        },
      })
    }
  }, [minify, api])
  return (
    <div className="prose w-full px-16">
      <animated.div className="overflow-hidden" style={springs}>
        <SignedIn>
          <button
            onClick={goNext}
            className="btn btn-warning btn-dash btn-block rounded-full"
          >
            شروع
          </button>
        </SignedIn>

        <SignedOut>
          <div className="join w-full">
            <Link
              to="/signin"
              className="btn btn-warning btn-dash btn-block join-item"
            >
              ورود
            </Link>
            <Link
              to="/signup"
              className="btn btn-warning btn-dash btn-block join-item"
            >
              ثبت‌نام
            </Link>
          </div>
        </SignedOut>
      </animated.div>
    </div>
  )
}
