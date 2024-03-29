/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  injectGlobals: true,
  projects: [
    {
      displayName: 'unit',
      testMatch: [ '**/test/unit/*.test.ts' ],
      'transform': {
        '^.+\\.tsx?$': 'ts-jest'
      },
      moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
      }
    },
    {
      displayName: 'integration',
      testMatch: [ '**/test/integration/*.test.ts' ],
      'transform': {
        '^.+\\.tsx?$': 'ts-jest'
      },
      moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
      }
    }
  ],
  testMatch: [ '**/test/unit/*.test.ts' ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  'transform': {
    '^.+\\.tsx?$': 'ts-jest'
  },
}