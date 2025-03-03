import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginForm from './components/LoginForm.tsx'
import AuthLayout from './components/AuthLayout.tsx'
import { Link, Route, Switch, Redirect } from "wouter";
import SignupForm from './components/SignupForm.tsx'
import AuthCard from './components/AuthCard.tsx'

function Navbar() {
  return (
    <div className="flex flex-row gap-2 fixed top-0 w-full">
      <Link className="px-5 py-3" to='/login'>Login</Link>
      <Link className="px-5 py-3" to='/register'>Signup</Link>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <AuthLayout>
      <Switch>
        <Route path="/login">
          <AuthCard src="/fingerprint.svg">
            <LoginForm />
          </AuthCard>
        </Route>
        <Route path="/register">
          <AuthCard src="/fingerprint.svg">
            <SignupForm />
          </AuthCard>
        </Route>
        <Route><Redirect to='/login' /></Route>
      </Switch>
    </AuthLayout>
  </StrictMode>
)
