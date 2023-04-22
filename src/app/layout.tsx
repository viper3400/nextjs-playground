import './globals.css'

export const metadata = {
  title: 'My first NEXT JS app',
  description: 'A first try with REACT and NextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
