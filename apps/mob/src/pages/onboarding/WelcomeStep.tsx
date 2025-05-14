import { animated, useSpring } from '@react-spring/web'
import { useEffect } from 'react'
import { Link } from 'react-router'

interface StepProps {
  minify?: boolean
  goNext: VoidFunction
}
export default function WelcomeStep({ minify, goNext }: StepProps) {
  const [springs, api] = useSpring(() => ({
    from: { height: 50 },
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
          height: 50,
        },
      })
    }
  }, [minify, api])
  return (
    <div className="prose w-full px-16">
      <animated.div
        className="lead motion-preset-rebound-up motion-duration-300 motion-delay-750 overflow-hidden"
        style={springs}
      >
        به
      </animated.div>
      <h1 className="motion-preset-rebound-up motion-duration-500 motion-delay-400 m-0! text-center">
        ساخت هوشمند
      </h1>
      <div className="divider divider-warning"></div>
      <animated.div
        className="lead motion-preset-rebound-down motion-duration-300 motion-delay-1000 m-0! overflow-hidden text-end"
        style={springs}
      >
        خوش آمدید
      </animated.div>
      <animated.div
        className="motion-preset-wiggle motion-delay-750 block overflow-hidden"
        style={springs}
      >
        <button
          className="btn btn-warning btn-block mb-3 rounded-full"
          onClick={goNext}
        >
          <span className="motion-preset-wobble">شروع</span>
        </button>
      </animated.div>
      <animated.div
        className="motion-preset-wiggle motion-delay-750 block overflow-hidden"
        style={springs}
      >
        <Link
          to="/signin"
          className="btn btn-warning btn-dash btn-block rounded-full"
          onClick={goNext}
        >
          <span>ورود</span>
        </Link>
      </animated.div>
    </div>
  )
}
