'use client'

import { createContext, ReactNode, useState } from 'react'
import { AuthState } from '@/lib/types/AuthState'
import { customConfig } from '../custom-config'
import { getApiToken } from './lib/api-auth-service'

/**
 * Props for the AuthenticationProvider component.
 */
type AuthenticationProps = {
  state: AuthState // The authentication state.
  localStoragePrefix: string // Prefix for local storage.
  baseUrl: string
  authService: typeof getApiToken
  setState: (newState: AuthState) => void // A function to update the authentication state.
};

/**
 * Default props for the AuthenticationProvider component.
 */
const defaultAuthenticationProps: AuthenticationProps = {
  state: 'NOT_AUTHENTICATED',
  localStoragePrefix: 'default',
  baseUrl: customConfig.apiBaseUrl? customConfig.apiBaseUrl : 'error',
  authService: customConfig.authService,
  setState: () => {}, // Initial function, gets replaced by the actual function.
}

/**
 * Context for managing authentication state.
 */
export const AuthenticationContext = createContext(defaultAuthenticationProps)

/**
 * Props for the AuthenticationProvider component.
 */
type AuthenticationProviderProps = {
  children: ReactNode // Child components to be wrapped by the AuthenticationProvider.
  localStoragePrefix: string // Prefix for local storage.
};

/**
 * AuthenticationProvider component for managing authentication state.
 *
 * @param children - Child components to be wrapped by the AuthenticationProvider.
 * @param localStoragePrefix - Prefix for local storage.
 */
export default function AuthenticationProvider({
  children,
  localStoragePrefix,
}: AuthenticationProviderProps) {
  const [authState, setAuthState] = useState<AuthState>('AUTHENTICATING')

  const authenticationContextValue: AuthenticationProps = {
    state: authState,
    localStoragePrefix: localStoragePrefix,
    baseUrl: customConfig.apiBaseUrl? customConfig.apiBaseUrl : 'error',
    authService: customConfig.authService,
    setState: setAuthState, // Provide the actual function to update the authentication state.
  }

  return (
    <AuthenticationContext.Provider value={ authenticationContextValue }>
      <div>{children}</div>
    </AuthenticationContext.Provider>
  )
}
