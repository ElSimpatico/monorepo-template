import { Config } from '@jest/types';

const jestConfig: Config.InitialOptions = {
    roots: ['<rootDir>/src/tests'],
    testMatch: [
        '**/__tests__/**/*.+(ts|tsx|js)',
        '**/?(*.)+(spec|test).+(ts|tsx|js)',
    ],
    transform: {
        '^.+\\.(js|ts)x?$': 'ts-jest',
    },
    setupFiles: ['<rootDir>/src/tests/enzyme-setup.ts'],
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': '<rootDir>/src/tests/mocks/styles.ts',
        '@components(.*)': '<rootDir>/src/components$1',
        '@pages(.*)': '<rootDir>/src/pages$1',
        'ui-core(.*)': '<rootDir>../ui-core/lib$1',
    },
};

export default jestConfig;
