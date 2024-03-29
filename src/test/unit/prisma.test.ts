import { PrismaClient } from '@internal/prisma/client'

describe('prisma db client', () => {
  test('create & delete db entry in HomeWebSession table', async () => {
    const prisma = new PrismaClient({
      log: ['query', 'info', 'warn', 'error'],
    })

    let existingRecords = await prisma.homeWebSession.findMany()
    expect(existingRecords.length).toBe(0)

    const dbResult = await prisma.homeWebSession.create({
      data: {
        username: 'Hans',
        token: 'xxslj',
        refresh1: 'xsxs',
        refresh2: 'AUTH'
      }
    })
    expect(dbResult.username).toBe('Hans')

    existingRecords = await prisma.homeWebSession.findMany()
    expect(existingRecords.length).toBe(1)
    expect(existingRecords[0].username).toBe('Hans')

    await prisma.homeWebSession.delete({
      where: {
        id: existingRecords[0].id
      }
    })

    existingRecords = await prisma.homeWebSession.findMany()
    expect(existingRecords.length).toBe(0)

  })

})