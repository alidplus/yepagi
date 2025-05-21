import { SignOutButton } from '@clerk/clerk-react'

export default function NotAccessible() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="prose max-w-md">
          <h1 className="m-0! text-5xl font-bold text-nowrap">
            به کجا چنین شتابان؟!
          </h1>
          <div className="flex gap-6">
            <p className="py-2">ترسم نرسی به کعبه ای اعرابی</p>
            <p className="py-2">این ره که تو می روی به ترکستان است</p>
          </div>
          <SignOutButton>
            <button className="btn btn-primary">بازگشت به خانه</button>
          </SignOutButton>
        </div>
      </div>
    </div>
  )
}
