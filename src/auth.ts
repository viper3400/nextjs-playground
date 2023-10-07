import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next'
import type { NextAuthOptions } from 'next-auth'
import { getServerSession } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

import { customConfig } from '../custom-config'
import { LoginCredentials } from './lib/types'

// You'll need to import and pass this
// to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`
export const config = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ? process.env.GITHUB_ID : '',
      clientSecret: process.env.GITHUB_SECRET ? process.env.GITHUB_SECRET : ''
    }),
    CredentialsProvider({
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const username = credentials?.username ? credentials.username : ''
        const password = credentials?.password ? credentials.password : ''
        const group = customConfig.viewgroup ? customConfig.viewgroup : ''
        console.log(group)
        const apiCredentials: LoginCredentials = {
          username: username,
          password: password,
          group: group
        }
        const authResult = await customConfig.authService(apiCredentials)
        console.log(authResult)
        if (authResult && authResult.authState === 'AUTHENTICATED') {
          const user = { id: username, name: username }
          return user
        }
        return null
      },
    }),
  ],
  // rest of your config
} satisfies NextAuthOptions

// Use it in server contexts
export function auth(...args: [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']] | [NextApiRequest, NextApiResponse] | []) {
  return getServerSession(...args, config)
}