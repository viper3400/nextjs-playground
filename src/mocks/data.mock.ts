import { faker } from '@faker-js/faker'
import { drop, factory, primaryKey } from '@mswjs/data'

let _id: any
const db = factory({
  item: {
    id: primaryKey(() => _id++),
    time: () => faker.date.recent({ days: 2 }).getTime() / 1000,
    user: faker.internet.userName,
    title: faker.lorem.words,
    url: faker.internet.url,
    score: () => faker.number.int(100),
  }
})

/** Reset the database */
export const reset = (seed?: number) => {
  _id = 1
  faker.seed(seed ?? 123)
  return drop(db)
}

/** Create a post. Faker will fill in any missing data */
export const createPost = (item = {}) => db.item.create(item)

/** Utility function */
export const range = (n: number) => Array.from({ length: n }, (x, i) => i)

/** Return all the post IDs */
export const postIds = () => db.item.findMany({}).map((p) => p.id)

/** Return the content of a single post by ID */
export const getItem = (id: number) => db.item.findFirst({ where: { id: { equals: id } } })
