import { createLazyFileRoute } from '@tanstack/react-router'

const technologies = [
  'React.js',
  'TanStack',
  'TypeScript',
  'Next.js',
  'Node.js',
  'Express',
  'Tailwind CSS',
  'Jest',
  'Testing Library',
  'Storybook',
  'Figma'
]

export const Route = createLazyFileRoute('/')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-600">
      <div className="flex min-h-screen flex-1 flex-col items-center justify-center gap-4 px-6">
        <h1 className="font-display text-5xl">Senior Web Developer</h1>
        <p className="font-body">
          Building clean, reliable, and modern frontend experiences.
        </p>
        <section className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech) => (
            <span key={tech} className="rounded bg-slate-500 px-2 py-1 text-sm">
              {tech}
            </span>
          ))}
        </section>
      </div>
      <div className="flex flex-col items-center justify-center bg-slate-500 px-3">
        <h2 className="pt-4 font-display text-2xl font-bold">About</h2>
        <p className="mt-4 font-body">
          Hi, I’m Tom Moore, a frontend developer with 6+ years of experience
          building clean, reliable software. I specialize in React.js,
          TypeScript, and modern web frameworks like NextJS, with additional
          experience maintaining backend systems using Node.js.
        </p>
        <p className="mt-4 pb-8 font-body">
          I’m passionate about delivering exceptional user experiences,
          mentoring teams, and improving workflows. Let’s collaborate to bring
          your vision to life!
        </p>
      </div>
    </div>
  )
}
