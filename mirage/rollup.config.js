import strip from '@rollup/plugin-strip'

export default {
  input: 'src/index.js',
  output: {
    dir: 'output',
    format: 'cjs',
  },
  plugins: [
    strip({
      labels: ['unittest'],
    }),
  ],
}