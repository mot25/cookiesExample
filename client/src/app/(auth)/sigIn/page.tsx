'use client'
import axios from 'axios'
import React, { useState } from 'react'

type Props = {}

const page = (props: Props) => {
  const [pass, setPass] = useState('pass')
  const [login, setLogin] = useState('login')
  const sigin = async () => {
    const response = await axios.post('/auth/sigin',
      {
        password: pass,
        login
      },
      {
        baseURL: 'http://localhost:5555',
        headers: { 
          'Content-Type': 'application/json'
        },
      })
    console.log("🚀 ~ file: page.tsx:19 ~ sigin ~ response:", response)
  }
  return (
    <div>
      <input
        type="text"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder='password'
      />
      <input
        type="text"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        placeholder='login'
      />
      <button onClick={sigin}>Sigin</button>
      <button onClick={sigin}>Войти как гость</button>
    </div>
  )
}

export default page