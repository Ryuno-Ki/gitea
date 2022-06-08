export default {
  rootDir: 'web_src',
  setupFilesAfterEnv: ['jest-extended/all'],
  testEnvironment: '@happy-dom/jest-environment',
  testMatch: ['<rootDir>/**/*.test.js'],
  testTimeout: 20000,
  transform: {
    '\\.svg$': '<rootDir>/js/testUtils/jestRawLoader.js',
    // See https://github.com/vuejs/vue-jest#installation
    '\\.vue$': '@vue/vue2-jest',
  },
  verbose: false,
};

