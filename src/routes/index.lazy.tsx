import { createLazyFileRoute } from '@tanstack/react-router'
import ExperienceCard from 'components/experience-card'
import Section from 'components/section'
import { experience, technologies } from 'data'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useSpring, animated, useTransition } from 'react-spring'

export const Route = createLazyFileRoute('/')({
  component: RouteComponent
})

function RouteComponent() {
  const firstCardRef = useRef<HTMLDivElement>(null)
  const lastCardRef = useRef<HTMLDivElement>(null)
  const [showAll, setShowAll] = useState(false)

  const handleShowAll = () => {
    setShowAll(true)
  }

  const transitions = useTransition(
    showAll ? experience : experience.slice(0, 3),
    {
      from: { opacity: 0, transform: 'translateY(-20px)' },
      enter: { opacity: 1, transform: 'translateY(0px)' },
      leave: { opacity: 0, transform: 'translateY(20px)' },
      keys: (exp) => exp.company,
      onChange() {
        updateLinePosition(true)
      },
      onRest() {
        if (showAll && lastCardRef.current) {
          lastCardRef.current.scrollIntoView({ behavior: 'smooth' })
        }
      },
      trail: showAll ? 500 : 0
    }
  )

  const [heightSpring, heightApi] = useSpring(() => ({
    top: 0,
    immediate: true,
    height: 0,
    config: { tension: 220, friction: 20, duration: 0 }
  }))

  const updateLinePosition = useCallback(
    (showAll?: boolean) => {
      if (firstCardRef.current && lastCardRef.current) {
        const firstRect = firstCardRef.current.getBoundingClientRect()
        const lastRect = lastCardRef.current.getBoundingClientRect()

        const distance = Math.hypot(
          lastRect.bottom - firstRect.top,
          lastRect.left - firstRect.left
        )

        heightApi.start({
          height: distance,
          config: { duration: showAll ? 1000 : 0 }
        })
      }
    },
    [heightApi]
  )

  useEffect(() => {
    updateLinePosition()
    const event = () => updateLinePosition()
    window.addEventListener('resize', event)
    return () => window.removeEventListener('resize', event)
  }, [updateLinePosition])

  return (
    <div className="flex min-h-screen flex-col bg-white pb-8 md:pb-16">
      <Section className="min-h-screen">
        <h1 className="font-display text-5xl">Senior Web Developer</h1>
        <p className="font-body">
          Building clean, reliable, and modern frontend experiences.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech) => (
            <span key={tech} className="rounded bg-green px-2 py-1 text-sm">
              {tech}
            </span>
          ))}
        </div>
      </Section>
      <animated.div>
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
      </animated.div>
      <animated.div>
        <Section>
          <h2 className="pt-4 font-display text-2xl font-bold">Experience</h2>
          <div className="relative flex flex-col gap-8">
            <animated.div
              className="absolute left-[-12px] w-1"
              style={{
                background:
                  'linear-gradient(to bottom, rgb(245 245 245 / var(--tw-bg-opacity, 1)) 0%, var(--color-charcoal) 7%, var(--color-charcoal) 93%, rgb(245 245 245 / var(--tw-bg-opacity, 1)) 100%)',
                ...heightSpring
              }}
            ></animated.div>
            {transitions((style, exp, _, index) => (
              <animated.div key={exp.company} style={style}>
                <ExperienceCard
                  ref={
                    index === 0
                      ? firstCardRef
                      : index === (showAll ? experience.length : 3) - 1
                        ? lastCardRef
                        : null
                  }
                  {...exp}
                />
              </animated.div>
            ))}
          </div>
          {!showAll && (
            <button
              onClick={() => handleShowAll()}
              className="mt-4 self-center rounded bg-bright-pink px-4 py-2"
            >
              Show All
            </button>
          )}
        </Section>
      </animated.div>
    </div>
  )
}
