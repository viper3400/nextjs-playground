
import { AuthenticationState } from '../types/AuthenticationState'
import prisma from './prisma'

export const saveOrUpdateDbSession = async (username: string, authState: AuthenticationState) => {
  if (!authState.refreshTuple?.item1 || !authState.refreshTuple?.item2) throw new Error('Tuples not set')

  await prisma.homeWebSession.upsert({
    where: {
      username: username
    },
    update: {
      token: authState.token,
      refresh1: authState.refreshTuple?.item1,
      refresh2: authState.refreshTuple?.item2
    },
    create: {
      username: username,
      token: authState.token,
      refresh1: authState.refreshTuple?.item1,
      refresh2: authState.refreshTuple?.item2
    }
  })
}
