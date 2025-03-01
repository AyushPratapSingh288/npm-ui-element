import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

export default defineConfig({
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'es',
    name: 'useful-animations',
  },
  external: ['react', 'react-dom'],
  plugins: [
    typescript({ tsconfig: './tsconfig.json' }),
    postcss({
      extensions: ['.css'],
    }),
  ],
});