"use client";

import { useState } from 'react'

export default function LoginForm() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Login feature page</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
