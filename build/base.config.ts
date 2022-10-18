import { loadEnv } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default ({ mode }) => ({
  base: mode === 'production' ? '/toolsdoc/' : '/',
  define: {
    'process.env': loadEnv(mode, process.cwd())
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
      '@libs': resolve(__dirname, '../libs')
    }
  },
  server: {
    open: true,
    port: 3000
  }
})
