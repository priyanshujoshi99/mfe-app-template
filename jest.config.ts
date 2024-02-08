export default {
  clearMocks: true,
  collectCoverage: true,
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(scss|sass|css|postcss)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  coverageReporters: ['json-summary', 'lcov'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: ['src/**/*.{test.tsx}', 'src/**/*.{test.ts}'],
  reporters: ['default', 'jest-sonar'],
  testResultsProcessor: 'jest-sonar-reporter',
  resolver: undefined
};
