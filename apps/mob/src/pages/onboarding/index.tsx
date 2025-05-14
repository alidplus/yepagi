import { cn } from '@repo/utils'
import { useState } from 'react'
import FieldStep from './FieldStep'
import RoleStep from './RoleStep'
import WelcomeStep from './WelcomeStep'
import FinalStep from './FinalStep'

export interface Metadata {
  field: 'architect' | 'civil' | 'mechanic'
  role: 'design' | 'supervision' | 'execution'
  defaultPrj?: number
}

interface OnBoardingProps {
  onFinish: (metadata: Metadata) => void
  metadata?: Partial<Metadata>
}

export default function OnBoarding({ onFinish, metadata }: OnBoardingProps) {
  const [step, setStep] = useState(1)

  const [field, setField] = useState<Metadata['field']>(
    metadata?.field ?? 'architect'
  )
  const [role, setRole] = useState<Metadata['role']>(metadata?.role ?? 'design')

  const handleNext = () => {
    setStep((s) => s + 1)
  }

  const handleBack = () => {
    setStep((s) => s - 1)
  }

  return (
    <div className="hero h-screen bg-purple-950 text-white">
      <div className="hero-content flex min-h-12 w-full flex-col justify-between gap-0">
        <ul className="steps motion-preset-slide-down motion-delay-1200 fixed top-10 w-full">
          <li
            className={cn('step', { 'step-warning': step > 1 })}
            onClick={() => setStep(2)}
          >
            <span className="motion-preset-slide-down motion-delay-1400">
              تخصص
            </span>
          </li>
          <li
            className={cn('step', { 'step-warning': step > 2 })}
            onClick={() => setStep(3)}
          >
            <span className="motion-preset-slide-down motion-delay-1500">
              نقش
            </span>
          </li>
          <li
            className={cn('step', { 'step-warning': step > 3 })}
            onClick={() => setStep(4)}
          >
            <span className="motion-preset-slide-down motion-delay-1600">
              شروع
            </span>
          </li>
        </ul>
        <WelcomeStep minify={step > 1} goNext={handleNext} />
        <FieldStep
          minify={step !== 2}
          goNext={handleNext}
          goBack={handleBack}
          value={field}
          onChange={setField}
        />
        <RoleStep
          minify={step !== 3}
          goNext={handleNext}
          goBack={handleBack}
          value={role}
          onChange={setRole}
        />
        <FinalStep
          minify={step !== 4}
          goNext={() => {
            onFinish({ field, role })
          }}
          goBack={() => {
            setStep(1)
          }}
        />
      </div>
    </div>
  )
}
