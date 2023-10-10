import { AuthState } from './AuthState'

export type AuthenticationState = {
    token: string
    refreshTuple?: RefreshTuple
    authState: AuthState
}

type RefreshTuple = {
    item1: string
    item2: string
}