import { Config } from '@jest/types';

const jestConfig: Config.InitialOptions = {
    roots: ['<rootDir>/src/tests'],
    testMatch: [
        '**/__tests__/**/*.+(ts|tsx|js)',
        '**/?(*.)+(spec|test).+(ts|tsx|js)',
    ],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    setupFiles: ['<rootDir>/src/tests/enzyme-setup.ts'],
};

export default jestConfig;
