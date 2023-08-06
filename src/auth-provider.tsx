'use client'

import   { createContext, ReactNode, useState } from 'react'

type AuthState = 'AUTHENTICATED' | 'NOT_AUTHENTICATED' | 'AUTHENTICATING';

type AuthenticationProps = {
  state: AuthState;
  setState: (newState: AuthState) => void; // A function to update the state
};

const defaultAuthenticationProps: AuthenticationProps = {
  state: 'NOT_AUTHENTICATED',
  setState: () => {}, // Initial function, gets replaced by the actual function
}

export const AuthenticationContext = createContext(defaultAuthenticationProps)

type AuthenticationProviderProps = {
  children: ReactNode;
};

export default function AuthenticationProvider({ children }: AuthenticationProviderProps) {
  const [authState, setAuthState] = useState<AuthState>('NOT_AUTHENTICATED')

  const authenticationContextValue: AuthenticationProps = {
    state: authState,
    setState: setAuthState, // Provide the actual function to update the state
  }

  return (
    <AuthenticationContext.Provider value={ authenticationContextValue }>
      {children}
    </AuthenticationContext.Provider>
  )
}
