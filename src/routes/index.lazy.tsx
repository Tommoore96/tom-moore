import { createLazyFileRoute } from '@tanstack/react-router'
import ExperienceCard from 'components/experience-card'
import Section from 'components/section'
import { experience, technologies } from 'data'

export const Route = createLazyFileRoute('/')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-600">
      <Section className="min-h-screen">
        <h1 className="font-display text-5xl">Senior Web Developer</h1>
        <p className="font-body">
          Building clean, reliable, and modern frontend experiences.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech) => (
            <span key={tech} className="rounded bg-slate-500 px-2 py-1 text-sm">
              {tech}
            </span>
          ))}
        </div>
      </Section>
      <Section className="bg-slate-500">
        <h2 className="pt-4 font-display text-2xl font-bold">About</h2>
        <p className="font-body">
          Hi, I’m Tom Moore, a frontend developer with 6+ years of experience
          building clean, reliable software. I specialize in React.js,
          TypeScript, and modern web frameworks like NextJS, with additional
          experience maintaining backend systems using Node.js.
        </p>
        <p className="font-body">
          I’m passionate about delivering exceptional user experiences,
          mentoring teams, and improving workflows. Let’s collaborate to bring
          your vision to life!
        </p>
      </Section>
      <Section>
        <h2 className="pt-4 font-display text-2xl font-bold">Experience</h2>
        <div className="flex flex-col gap-8">
          {experience.map((exp) => (
            <ExperienceCard key={exp.company} {...exp} />
          ))}
        </div>
      </Section>
    </div>
  )
}
