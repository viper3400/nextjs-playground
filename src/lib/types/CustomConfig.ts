import { Api } from '../videodb-api'
import { AuthenticationState } from './AuthenticationState'
import { LoginCredentials } from './LoginCredentials'

export type CustomConfig = {
    apiBaseUrl: string,
    viewgroup: string,
    authService: (credentials: LoginCredentials) => Promise<AuthenticationState>,
    authenticatedApi: () => Promise<Api<unknown>>
}