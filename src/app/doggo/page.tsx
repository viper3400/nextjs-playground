'use client'

import { useContext } from 'react'
import { useAuthentication } from '@/lib/authHook'
import { AuthenticationContext } from '@/auth-provider'
import { Dog } from '@/components/dog'
import { LoginForm } from '@/stories/homeweb/LoginForm'

export default function Home() {
  const { state } = useContext(AuthenticationContext)
  const { handleFormSubmit } = useAuthentication()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {state === 'AUTHENTICATING' &&  (
        <div></div>
      )}
      {state === 'NOT_AUTHENTICATED' && (
        <LoginForm
          dialogTitle={ 'Anmeldung' }
          usernameLabel={ 'Benutzername' }
          passwordLabel={ 'Passwort' }
          logInButtonLabel={ 'Anmelden' }
          onSubmit={ handleFormSubmit }
        />
      )}
      {state === 'AUTHENTICATED' && <Dog />}
    </main>
  )
}