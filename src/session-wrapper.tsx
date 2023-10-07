'use client'

import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'
import type { Session } from 'next-auth'

type SessionWrapperProps = {
  children: ReactNode,
  session: Session
}

export default function SessionWrapper({ children, session }: SessionWrapperProps) {
  return (
    <>
      <SessionProvider session={ session }>{children}</SessionProvider>
    </>
  )
}