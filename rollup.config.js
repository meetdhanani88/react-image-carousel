import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';

const production = process.env.NODE_ENV === 'production';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: !production,
    },
    {
    file: 'dist/index.esm.js',
    format: 'esm',
      sourcemap: !production,
  },
  ],
  external: ['react', 'react-dom'],
  watch: {
    include: 'src/**',
    exclude: 'node_modules/**',
    clearScreen: false,
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      sourceMap: !production,
      inlineSources: !production,
    }),
    postcss({
      modules: false,
      use: ['sass'],
      sourceMap: !production,
      inject: true,
    }),
  ],
};
