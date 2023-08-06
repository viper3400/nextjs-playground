'use server'

import { LoginCredentials } from './types'

const apiUrl = process.env.VIDEODB_WEB_API_URL

export async function getToken(credentials : LoginCredentials) {
  const url = `${apiUrl}/token`
  const response = await fetch (url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return response.json()
}