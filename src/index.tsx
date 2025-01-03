import './main.css'
import { Amplify } from 'aws-amplify'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import outputs from '../amplify_outputs.json'
import { routeTree } from './routeTree.gen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { generateClient } from 'aws-amplify/data'
import type { Schema } from '../amplify/data/resource'

const queryClient = new QueryClient()

Amplify.configure(outputs)

export const client = generateClient<Schema>()

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {
    queryClient
  }
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>
  )
}
