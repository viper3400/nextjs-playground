import AuthenticationProvider from '@/auth-provider'
import './globals.css'
import { customConfig } from '../../custom-config'


export const metadata = {
  title: 'My first NEXT JS app',
  description: 'A first try with REACT and NextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  if (!customConfig.apiBaseUrl) throw new Error('Api Base Url must be set')
  return (
    <html lang="en">
      <body>
        <AuthenticationProvider localStoragePrefix={ customConfig.apiBaseUrl }>{children}</AuthenticationProvider>
      </body>
    </html>
  )
}
