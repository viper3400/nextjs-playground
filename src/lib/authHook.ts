'use client'

import { useContext, useEffect } from 'react'
import { AuthenticationContext } from '@/auth-provider'
import { setLocalStorageItem, getLocalAuthenticationState } from '@/lib/localStorageManager'
import { LoginCredentials } from '@/lib/types'

export function useAuthentication() {
  const { state, setState, authService, baseUrl, localStoragePrefix } = useContext(AuthenticationContext)

  const handleFormSubmit = async (formData: LoginCredentials) => {
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
  }, [setState, localStoragePrefix])

  return { state, handleFormSubmit }
}
