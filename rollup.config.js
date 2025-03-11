import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';

const isProduction = process.env.NODE_ENV === 'production';
console.log(isProduction,"dhkjkhj")

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.esm.js',
    format: 'esm',
    sourcemap: !isProduction,
  },
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
      sourceMap: !isProduction,
      inlineSources: !isProduction,
    }),
    postcss({
      modules: false,
      use: ['sass'],
      sourceMap: !isProduction,
      inject: true,
    }),
  ],
}; 