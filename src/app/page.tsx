'use client'

import { useContext } from 'react'
import { AuthenticationContext } from '@/auth-provider'
import { Dog } from '@/components/dog'
import { LoginForm } from '@/stories/homeweb/LoginForm'

export default function Home() {
  const { state, setState } = useContext(AuthenticationContext)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Authentication State: {state}</p>
      {state === 'NOT_AUTHENTICATED' ? (
        <LoginForm
          dialogTitle={ 'Anmeldung' }
          usernameLabel={ 'Benutzername' }
          passwordLabel={ 'Passwort' }
          logInButtonLabel={ 'Anmelden' }
        />
      ) : (
        <Dog />
      )}
    </main>
  )
}
