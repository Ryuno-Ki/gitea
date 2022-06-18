export default {
  rootDir: 'web_src',
  setupFilesAfterEnv: ['jest-extended/all', '<rootDir>/js/testUtils/jestSetup.js'],
  testEnvironment: '@happy-dom/jest-environment',
  testMatch: ['<rootDir>/**/*.test.js'],
  testTimeout: 20000,
  transform: {
    '\\.svg$': '<rootDir>/js/testUtils/jestRawLoader.js',
    // See https://github.com/vuejs/vue-jest#installation
    '\\.vue$': '@vue/vue2-jest',
  },
  moduleNameMapper: {
    '../svg.js': '<rootDir>/js/__mocks__/svg.js',
  },
  verbose: false,
};

