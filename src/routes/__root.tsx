import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent
})

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sr-only">
        <h1>Tom Moore - Senior Web Developer</h1>
        <p>Specialising in React, TypeScript, and Next.js</p>
      </header>
      <main className="grow">
        <Outlet />
      </main>
      <footer className="w-full bg-white py-4 text-center text-sm">
        <p className="opacity-40">
          © {new Date().getFullYear()} Tom Moore. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
