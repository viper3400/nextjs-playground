import { AuthState } from './types/AuthState'

export function setLocalStorageItem(key: string, value: any): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(value))
  }
}

export function getLocalStorageItem(key: string): any {
  if (typeof window !== 'undefined') {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  }
  return null
}

export function removeLocalStorageItem(key: string): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key)
  }
}

export function getLocalAuthenticationState(localStoragePrefix: string): AuthState {
  const savedToken = getLocalStorageItem(`${localStoragePrefix}_token`)
  let authState: AuthState
  if (savedToken && savedToken != '') {
    authState = 'AUTHENTICATED'
  } else authState = 'NOT_AUTHENTICATED'
  return authState
}