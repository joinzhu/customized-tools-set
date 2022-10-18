import baseConfig from './base.config'
import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import Markdown from 'vite-plugin-vue-markdown'

// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    ...baseConfig({ mode }),
    build: {
      outDir: 'docs'
    },
    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/]
      }),
      Markdown(),
      WindiCSS()
    ]
  })
