import { AuthenticationState } from './AuthenticationState'
import { LoginCredentials } from './LoginCredentials'

export type CustomConfig = {
    apiBaseUrl: string | undefined,
    viewgroup: string | undefined,
    authService: (credentials: LoginCredentials) => Promise<AuthenticationState>
}