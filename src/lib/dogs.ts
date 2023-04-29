'use server'

export async function getDog() {
    const dogResult = await fetch('https://dog.ceo/api/breeds/image/random', { cache: 'no-store' })

    if (!dogResult.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
    
      return dogResult.json()
}