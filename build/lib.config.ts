import baseConfig from './base.config'
import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    ...baseConfig({ mode }),
    build: {
      lib: {
        entry: resolve(__dirname, '../libs/index.ts'),
        name: 'tools',
        formats: ['es', 'cjs'],
        fileName: format => `tools.${format}.js`
      },
      outDir: 'lib-dist'
    }
  })
