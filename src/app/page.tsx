
import { Dog } from '@/components/dog'
import { auth } from '@/auth'
import Github from '@/components/github'

export default async function Home() {
  const session = await auth()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div></div>
      { !session && <Github /> }
      { session && <Dog /> }
    </main>
  )
}
