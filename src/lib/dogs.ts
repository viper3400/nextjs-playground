'use server'
/**
 * Fetches a random dog image from a dog API.
 *
 * @returns A promise that resolves to the fetched dog data.
 * @throws An error if the fetch operation fails.
 * @example
 * // Fetch a random dog image
 * try {
 *   const dogData = await getDog();
 *   console.log('Random Dog Image URL:', dogData.message);
 * } catch (error) {
 *   console.error('Failed to fetch a random dog image:', error.message);
 * }
 */
export async function getDog() {
  try {
    // Fetch a random dog image from the API
    const dogResult = await fetch('https://dog.ceo/api/breeds/image/random', { cache: 'no-store' })

    if (!dogResult.ok) {
      // If the API response is not successful, throw an error
      throw new Error('Failed to fetch data')
    }

    // Parse the response JSON and return it
    return dogResult.json()
  } catch (error) {
    // Handle any errors that occur during the fetch or JSON parsing
    throw new Error('Failed to fetch data')
  }
}
