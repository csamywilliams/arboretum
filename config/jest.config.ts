import type {Config} from 'jest';

const config: Config = {
    preset: 'ts-jest',
    rootDir: '../',
    collectCoverageFrom: ['**/*.{ts,tsx}', '!**/node_modules/**'],
    setupFilesAfterEnv: ['<rootDir>/config/setupTests.ts'],
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^assets(.*)$': '<rootDir>/assets$1',
        '^components(.*)$': '<rootDir>/src/components$1',
        '^data(.*)$': '<rootDir>/src/data$1',
        '^utils(.*)$': '<rootDir>/src/utils$1',
        '^container(.*)$': '<rootDir>/src/container$1',
        '^__mocks__(.*)$': '<rootDir>/src/__mocks__$1',
        '\\.(svg)$': '<rootDir>/src/__mocks__/fileMock.js',
        '^__testHelpers__(.*)$': '<rootDir>/src/__testHelpers__$1',
    },
    testPathIgnorePatterns: [
        '/node_modules/',
        '__config__',
        '__helpers__',
        '__mocks__',
        '__testData__',
        '__testHelpers__',
        'build',
    ],
};

module.exports = config;