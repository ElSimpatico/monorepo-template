import { Config } from '@jest/types';

const jestConfig: Config.InitialOptions = {
    roots: ['<rootDir>/src'],
    testMatch: [
        '**/__tests__/**/*.+(ts|tsx|js)',
        '**/?(*.)+(spec|test).+(ts|tsx|js)',
    ],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    setupFiles: ['<rootDir>/enzyme-setup.ts'],
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': '<rootDir>/jest-styles.module.ts',
        '@components(.*)': '<rootDir>/src/components$1',
        '@themes(.*)': '<rootDir>/src/themes$1',
        '@utils(.*)': '<rootDir>/src/utils$1',
    },
};

export default jestConfig;
