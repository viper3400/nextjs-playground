import { auth } from '@/auth'
import Github from '@/components/github'
import { MoviesFeature } from '@/components/moviesFeature'

const getContentBasedOnSession = async () => {
  const session = await auth()
  if (session) {
    return (
      <div>
        <MoviesFeature session={ session }/>
      </div>
    )
  } else {
    return (
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <Github />
      </div>
    )
  }
}

export default async function Home() {
  const content = await getContentBasedOnSession()
  return (
    <main>
      { content }
    </main>
  )
}
