/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  injectGlobals: true,
  testRegex: '.test.ts$',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  'transform': {
    '^.+\\.tsx?$': 'ts-jest'
  },
}