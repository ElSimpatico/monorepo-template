import { resolve } from 'path';
import rollupTypescript from 'rollup-plugin-typescript2';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: resolve(__dirname, '../src/index.ts'),
    output: {
        file: 'dist/index.js',
        format: 'es',
    },
    plugins: [
        nodeResolve(),
        commonjs(),
        rollupTypescript({
            tsconfigOverride: {
                exclude: [
                    '.stroybook',
                    'coverage',
                    'dist',
                    'lib',
                    'node_modules',
                    'src/stories',
                    'src/tests',
                ],
            },
        }),
    ],
};
