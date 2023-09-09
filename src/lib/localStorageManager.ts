import { AuthState } from './types/AuthState'

/**
 * Sets a value in the local storage.
 *
 * @param key - The key under which to store the value.
 * @param value - The value to store in the local storage.
 * @example
 * setLocalStorageItem('user', { name: 'John', age: 30 });
 */
export function setLocalStorageItem(key: string, value: any): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(value))
  }
}

/**
 * Retrieves a value from the local storage.
 *
 * @param key - The key of the value to retrieve.
 * @returns The value retrieved from local storage, or null if not found.
 * @example
 * const user = getLocalStorageItem('user');
 * if (user) {
 *   console.log(`User Name: ${user.name}`);
 * }
 */
export function getLocalStorageItem(key: string): any {
  if (typeof window !== 'undefined') {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  }
  return null
}

/**
 * Removes a value from the local storage.
 *
 * @param key - The key of the value to remove.
 * @example
 * removeLocalStorageItem('user');
 */
export function removeLocalStorageItem(key: string): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key)
  }
}

/**
 * Clears all values from the local storage.
 * @example
 * removeLocalStorage();
 */
export function removeLocalStorage(): void {
  if (typeof window !== 'undefined') {
    localStorage.clear()
  }
}

/**
 * Gets the authentication state from local storage.
 *
 * @param localStoragePrefix - The prefix for keys in local storage.
 * @returns The authentication state ('AUTHENTICATED' or 'NOT_AUTHENTICATED').
 * @example
 * const authState = getLocalAuthenticationState('app');
 * if (authState === 'AUTHENTICATED') {
 *   // User is authenticated
 * } else {
 *   // User is not authenticated
 * }
 */
export function getLocalAuthenticationState(localStoragePrefix: string): AuthState {
  const savedToken = getLocalStorageItem(`${localStoragePrefix}_token`)
  let authState: AuthState
  if (savedToken && savedToken != '') {
    authState = 'AUTHENTICATED'
  } else authState = 'NOT_AUTHENTICATED'
  return authState
}
