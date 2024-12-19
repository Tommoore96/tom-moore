/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { createApp } from 'vinxi'
import { config } from 'vinxi/plugins/config'

export default createApp({
  routers: [
    {
      name: 'public',
      type: 'static',
      dir: './public'
    },
    {
      name: 'client',
      type: 'spa',
      handler: './index.html',
      base: '/',
      plugins: () => [
        config('custom', {}),
        react(),
        tsconfigPaths(),
        TanStackRouterVite()
      ]
    },
    {
      name: 'api',
      type: 'http',
      handler: './src/api.ts',
      base: '/api'
    }
  ]
})
