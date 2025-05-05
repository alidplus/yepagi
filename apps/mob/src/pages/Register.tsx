import { FormEvent } from 'react'
import { Link, useLocation } from 'wouter'

export default function Register() {
  const [, setLocation] = useLocation()

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    if (!email || !password) {
      alert('لطفا ایمیل و رمز عبور را وارد کنید')
      return
    }
    setLocation('/')
  }

  return (
    <form onSubmit={handleLogin}>
      <div className="mb-8 flex w-full justify-center opacity-75">
        <img src="/shapes/secure-auth.svg" className="w-24" />
      </div>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 shadow">
        <h1 className="text-center text-2xl">ثبت نام</h1>

        <label className="label">ایمیل</label>
        <input
          type="email"
          name="email"
          className="input"
          placeholder="ایمیل"
        />

        <label className="label">رمز عبور</label>
        <input
          type="password"
          name="password"
          className="input"
          placeholder="رمز عبور"
        />

        <button className="btn btn-neutral mt-4">ثبت نام</button>
      </fieldset>
      <div className="divider">قبلا ثبت نام کرده اید؟</div>
      <Link className="btn btn-link btn-block" to="/login">
        ورود
      </Link>
    </form>
  )
}
