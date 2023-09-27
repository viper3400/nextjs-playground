'use client'

import { useContext, useEffect } from 'react'
import { AuthenticationContext } from '@/auth-provider'
import { Dog } from '@/components/dog'
import { LoginForm } from '@/stories/homeweb/LoginForm'
import { LoginCredentials } from '@/lib/types'
import { getLocalAuthenticationState, setLocalStorageItem } from '@/lib/localStorageManager'

export default function Home() {
  const { state, setState } = useContext(AuthenticationContext)
  const { localStoragePrefix } = useContext(AuthenticationContext)
  const { authService, baseUrl } = useContext(AuthenticationContext)
  const handleFormSubmit = async (formData : LoginCredentials) => {
    console.log('xy: ' + baseUrl)
    // Perform login logic using formData
    const response = await authService({
      username: formData.username,
      password: formData.password,
      group: 'VG_Default'
    })
    console.log('x: ' + response)

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
