'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import { Dog } from '@/components/dog'
import { LoginForm } from '@/stories/homeweb/LoginForm'
import { JaxxButton } from './jaxx-button'

export default function Github() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <JaxxButton label="SignIn" onClick= { () => signIn() } disabled={ false } />
    </main>
  )
}