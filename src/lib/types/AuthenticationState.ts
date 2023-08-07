import { AuthState } from './AuthState'

export type AuthenticationState = {
    token: string
    refreshTuple: string
    authState: AuthState
}