// mocks.ts

import { LoginCredentials } from './types'
import { AuthenticationState } from './types/AuthenticationState'

// Define a mock function that matches the GetAuthToken type
export const getAuthTokenMock: jest.Mock<Promise<AuthenticationState>, [LoginCredentials]> = jest.fn()