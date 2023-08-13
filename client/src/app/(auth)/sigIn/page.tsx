'use client'
import AuthService from '@/service/Auth.service'
import axios from 'axios'
import React, { useState } from 'react'

type Props = {}

const page = (props: Props) => {
  const [pass, setPass] = useState('pass')
  const [login, setLogin] = useState('login')
  const sigIn = async () => {
    const response = await AuthService.sigIn({
      email: login,
      password: pass
    })
    console.log("🚀 ~ file: page.tsx:16 ~ sigIn ~ response:", response)
  }

  const sigInAsGuest = async () => {
    const temporaryToken = `${window.navigator.userAgent}-${Date.now()}`
    const response = await AuthService.sigUp({
      isGuest: true,
      password: temporaryToken,
      email: null
    })
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
      <button onClick={sigIn}>Sigin</button>
      <button onClick={sigInAsGuest}>Войти как гость</button>
    </div>
  )
}

export default page