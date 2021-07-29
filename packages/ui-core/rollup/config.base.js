import rollupTypescript from 'rollup-plugin-typescript2';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

import rollupStyles from 'rollup-plugin-styles';

import { resolve } from 'path';

import PackageJSON from '../package.json';

function getExternals() {
    return [...Object.keys(PackageJSON.peerDependencies || {})];
}

export default {
    input: resolve(__dirname, '../src/index.ts'),
    output: {
        file: 'lib/index.js',
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
        rollupStyles(),
    ],
    external: getExternals(),
};
