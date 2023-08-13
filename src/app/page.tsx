'use client'

import { useContext, useEffect } from 'react'
import { AuthenticationContext } from '@/auth-provider'
import { Dog } from '@/components/dog'
import { LoginForm } from '@/stories/homeweb/LoginForm'
import { getToken } from '@/lib/getToken'
import { LoginCredentials } from '@/lib/types'
import { getLocalAuthenticationState, setLocalStorageItem } from '@/lib/localStorageManager'

export default function Home() {
  const { state, setState } = useContext(AuthenticationContext)
  const { localStoragePrefix } = useContext(AuthenticationContext)
  const handleFormSubmit = async (formData : LoginCredentials) => {
    // Perform login logic using formData
    const response = await getToken({
      username: formData.username,
      password: formData.password,
      group: 'VG_Default'
    })

    setState(response.authState)
    setLocalStorageItem(`${localStoragePrefix}_token`, response.token)
    setLocalStorageItem(`${localStoragePrefix}_refreshTuple`, response.refreshTuple)
    // You can update the state or perform any other logic with the token here
  }

  useEffect(() => {
    const authState = getLocalAuthenticationState(localStoragePrefix)
    setState(authState)
  })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {state === 'AUTHENTICATING' && <p>Authentication State: {state}</p>}
      {state === 'NOT_AUTHENTICATED'  &&
        <LoginForm
          dialogTitle={ 'Anmeldung' }
          usernameLabel={ 'Benutzername' }
          passwordLabel={ 'Passwort' }
          logInButtonLabel={ 'Anmelden' }
          onSubmit={ handleFormSubmit }
        />
      }
      {state === 'AUTHENTICATED' && <Dog />}
    </main>
  )
}
