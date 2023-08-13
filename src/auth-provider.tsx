'use client'

import   { createContext, ReactNode, useState } from 'react'
import { AuthState } from '@/lib/types/AuthState'



type AuthenticationProps = {
  state: AuthState
  localStoragePrefix: string
  setState: (newState: AuthState) => void // A function to update the state
};

const defaultAuthenticationProps: AuthenticationProps = {
  state: 'NOT_AUTHENTICATED',
  localStoragePrefix: 'default',
  setState: () => {}, // Initial function, gets replaced by the actual function
}

export const AuthenticationContext = createContext(defaultAuthenticationProps)

type AuthenticationProviderProps = {
  children: ReactNode
  localStoragePrefix: string
};

export default function AuthenticationProvider({ children, localStoragePrefix }: AuthenticationProviderProps) {
  const [authState, setAuthState] = useState<AuthState>('AUTHENTICATING')

  const authenticationContextValue: AuthenticationProps = {
    state: authState,
    localStoragePrefix: localStoragePrefix,
    setState: setAuthState, // Provide the actual function to update the state
  }

  return (
    <AuthenticationContext.Provider value={ authenticationContextValue }>
      <div>{children}</div>
    </AuthenticationContext.Provider>
  )
}
