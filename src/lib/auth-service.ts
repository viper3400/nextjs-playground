import { LoginCredentials } from './types'
import { AuthenticationState } from './types/AuthenticationState'

export type GetAuthToken = (credentials: LoginCredentials) => Promise<AuthenticationState>

