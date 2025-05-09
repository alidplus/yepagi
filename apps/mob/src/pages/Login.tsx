import { FormEvent } from 'react'
import { Link } from 'wouter'
import supabase from '../api/supabase'

export default function Login() {
  // const [, setLocation] = useLocation()

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    if (!email || !password) {
      alert('لطفا ایمیل و رمز عبور را وارد کنید')
      return
    }
    try {
      const { data } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      console.log('login success', data)
    } catch (e) {
      console.log('login error', e)
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <div className="mb-8 flex w-full justify-center">
        <img src="/shapes/secure-auth.svg" className="w-24" />
      </div>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 shadow">
        <h1 className="text-center text-2xl">ورود</h1>

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

        <button className="btn btn-neutral mt-4">ورود</button>
      </fieldset>
      <div className="divider">ثبت نام نکرده اید؟</div>
      <Link className="btn btn-link btn-block" to="/register">
        ثبت نام
      </Link>
    </form>
  )
}
