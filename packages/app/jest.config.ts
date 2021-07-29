import { Config } from '@jest/types';

const jestConfig: Config.InitialOptions = {
    roots: ['<rootDir>/src'],
    testMatch: [
        '**/__tests__/**/*.+(ts|tsx|js)',
        '**/?(*.)+(spec|test).+(ts|tsx|js)',
    ],
    transform: {
        '^.+\\.(js|ts)x?$': 'ts-jest',
    },
    setupFiles: ['<rootDir>/enzyme-setup.ts'],
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': '<rootDir>/jest-styles.module.ts',
        '@components(.*)': '<rootDir>/src/components$1',
        '@pages(.*)': '<rootDir>/src/pages$1',
        '@utils(.*)': '<rootDir>/src/utils$1',
        'ui-core(.*)': '<rootDir>../ui-core/lib$1',
    },
};

export default jestConfig;
