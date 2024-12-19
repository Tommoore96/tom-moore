import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient()

export function createRouter() {
  const router = createTanStackRouter({
    routeTree,
    context: {
      queryClient
    }
  })

  return router
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}
