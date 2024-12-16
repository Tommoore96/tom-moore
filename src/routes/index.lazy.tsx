import { createLazyFileRoute } from '@tanstack/react-router'
import ExperienceCard from 'components/experience-card'
import Section from 'components/section'
import { experience, technologies } from 'data'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useSpring, animated, useScroll, easings } from 'react-spring'

export const Route = createLazyFileRoute('/')({
  component: RouteComponent
})

function RouteComponent() {
  const firstCardRef = useRef<HTMLDivElement>(null)
  const lastCardRef = useRef<HTMLDivElement>(null)
  const [linePosition, setLinePosition] = useState({ top: 0, bottom: 0 })
  const [showAll, setShowAll] = useState(false)
  const { scrollYProgress } = useScroll({ immediate: true, reverse: false })
  const [springs, api] = useSpring(() => ({
    opacity: 0,
    transform: 'translateY(20px)',
    config: {
      tension: 220,
      friction: 20,
      duration: 3000
    }
  }))
  const [heightSpring, heightApi] = useSpring(() => ({
    top: 0,
    bottom: 0,
    config: { tension: 220, friction: 20, duration: 3000 }
  }))

  const updateLinePosition = useCallback(() => {
    if (firstCardRef.current && lastCardRef.current) {
      const firstRect = firstCardRef.current.getBoundingClientRect()
      const lastRect = lastCardRef.current.getBoundingClientRect()

      setLinePosition({
        top: firstRect.height / 2,
        bottom: lastRect.height / 2
      })
      heightApi.start({
        top: firstRect.height / 2,
        bottom: lastRect.height / 2
      })
    }
  }, [heightApi])

  useEffect(() => {
    updateLinePosition()
    window.addEventListener('resize', updateLinePosition)
    return () => window.removeEventListener('resize', updateLinePosition)
  }, [updateLinePosition])

  useEffect(() => {
    if (showAll) {
      api.start({ opacity: 1, transform: 'translateY(0px)' })
      updateLinePosition()
    }
  }, [showAll, api, updateLinePosition])

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
      <animated.div style={{ opacity: scrollYProgress }}>
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
      <Section>
        <h2 className="pt-4 font-display text-2xl font-bold">Experience</h2>
        <div className="relative flex flex-col gap-8">
          <animated.div
            className="absolute left-[-12px] w-1 bg-blue"
            style={{
              top: `${linePosition.top}px`,
              bottom: `${linePosition.bottom}px`
            }}
          ></animated.div>
          {(showAll ? experience : experience.slice(0, 4)).map((exp, index) => (
            <animated.div key={exp.company} style={index >= 4 ? springs : {}}>
              <ExperienceCard
                ref={
                  index === 0
                    ? firstCardRef
                    : index === (showAll ? experience.length : 4) - 1
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
            onClick={() => setShowAll(true)}
            className="mt-4 self-center rounded bg-bright-pink px-4 py-2"
          >
            Show All
          </button>
        )}
      </Section>
    </div>
  )
}
