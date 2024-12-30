import { useMutation } from '@tanstack/react-query'
import { createLazyFileRoute } from '@tanstack/react-router'
import ExperienceCard from '../components/experience-card'
import Section from '../components/section'
import { experience, technologies } from '../data'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useSpring, animated, useTransition } from 'react-spring'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, ContactSchema } from '../forms/schemas'
import Loader from '../components/loader'
import { toast, Toaster } from 'sonner'
import { generateClient } from 'aws-amplify/data'
import type { Schema } from '../../amplify/data/resource'

export const Route = createLazyFileRoute('/')({
  component: RouteComponent
})

const client = generateClient<Schema>()

const contactMeFetch = async (data: Schema['contactMe']['args']) => {
  const response = await client.queries.contactMe(data)

  if (response.errors) {
    throw new Error(response.errors.toString())
  } else {
    return response.data
  }
}

const ANIMATION_OFFSET = 20

function RouteComponent() {
  const firstCardRef = useRef<HTMLDivElement>(null)
  const lastCardRef = useRef<HTMLDivElement>(null)
  const experienceSectionRef = useRef<HTMLDivElement>(null)
  const contactSectionRef = useRef<HTMLDivElement>(null)
  const [showAll, setShowAll] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema)
  })

  const contactMe = useMutation({
    mutationFn: (formData: ContactSchema) =>
      fetch('https://nv92eup697.execute-api.eu-north-1.amazonaws.com/prod/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }).then((res) => res.json()),
    onSuccess: () => toast.success('Message sent successfully!'),
    onError: (data) => {
      toast.error('Failed to send message.')
      console.log(data)
    }
  })

  const onSubmit: SubmitHandler<ContactSchema> = (data) => {
    contactMe.mutate(data)
    contactMeFetch(data)
  }

  const transitions = useTransition(
    showAll ? experience : experience.slice(0, 3),
    {
      from: { opacity: 0, transform: `translateY(-${ANIMATION_OFFSET}px)` },
      enter: { opacity: 1, transform: 'translateY(0px)' },
      leave: { opacity: 0, transform: `translateY(${ANIMATION_OFFSET}px)` },
      keys: (exp) => exp.company,
      onStart() {
        if (showAll && lastCardRef.current) {
          lastCardRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
        updateLinePosition(true)
      },
      onChange() {},
      trail: 500
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
    const event = () => updateLinePosition()
    window.addEventListener('resize', event)
    return () => window.removeEventListener('resize', event)
  }, [updateLinePosition])

  const handleShowAllToggle = useCallback(() => {
    setShowAll((prevShowAll) => {
      if (prevShowAll && experienceSectionRef.current) {
        const scrollToPosition =
          window.scrollY +
          experienceSectionRef.current.getBoundingClientRect().top -
          ANIMATION_OFFSET

        window.scrollTo({
          top: scrollToPosition,
          behavior: 'smooth'
        })
      }
      updateLinePosition(showAll)
      return !prevShowAll
    })
  }, [showAll, updateLinePosition])

  return (
    <div className="flex min-h-screen justify-center bg-white pb-8 md:pb-16">
      <div className="flex w-full max-w-4xl flex-col self-center">
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
          <Section>
            <h2 className="pt-4 font-display text-2xl font-bold">About</h2>
            <p className="font-body">
              Hi, I’m Tom Moore, a frontend developer with 6+ years of
              experience building clean, reliable software. I specialize in
              React.js, TypeScript, and modern web frameworks like NextJS, with
              additional experience maintaining backend systems using Node.js.
            </p>
            <p className="font-body">
              I’m passionate about delivering exceptional user experiences,
              mentoring teams, and improving workflows. Let’s collaborate to
              bring your vision to life!
            </p>
          </Section>
        </animated.div>
        <animated.div>
          <Section ref={experienceSectionRef}>
            <h2 className="pt-4 font-display text-2xl font-bold">Experience</h2>
            <div className="relative flex flex-col gap-8">
              <animated.div
                className="absolute left-[-12px] w-1"
                style={{
                  background:
                    'linear-gradient(to bottom, rgb(245 245 245 / var(--tw-bg-opacity, 1)) 0%, var(--color-charcoal) 7%, var(--color-charcoal) 93%, rgb(245 245 245 / var(--tw-bg-opacity, 1)) 100%)',
                  ...heightSpring
                }}
              />
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

            <button
              onClick={() => handleShowAllToggle()}
              className="mt-4 self-center rounded border-2 border-charcoal px-4 py-2 hover:bg-jasmine"
            >
              {showAll ? 'Show less' : 'Show more'}
            </button>
          </Section>
          <Section
            ref={contactSectionRef}
            className="max-w-4xl items-stretch text-left"
          >
            <h2 className="pt-4 font-display text-2xl font-bold">Contact me</h2>
            <form
              id="contact-form"
              onSubmit={handleSubmit(onSubmit)}
              className="relative flex flex-col gap-2"
            >
              <div className="flex flex-col gap-2">
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  {...register('name')}
                  className="rounded border-2 border-charcoal px-4 py-2"
                />
                <div className="text-red">
                  <ErrorMessage errors={errors} name="name" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <input
                  id="emailAddress"
                  type="emailAddress"
                  placeholder="Email"
                  className="rounded border-2 border-charcoal px-4 py-2"
                  {...register('emailAddress')}
                />
                <div className="text-red">
                  <ErrorMessage errors={errors} name="emailAddress" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <textarea
                  id="message"
                  placeholder="Message"
                  {...register('message')}
                  className="h-48 rounded border-2 border-charcoal px-4 py-2"
                />
                <div className="text-red">
                  <ErrorMessage errors={errors} name="message" />
                </div>
              </div>
              <button
                className="mt-4 flex w-full items-center justify-center self-center rounded border-2 border-charcoal px-4 py-2 hover:bg-jasmine md:w-auto md:self-start"
                type="submit"
                disabled={contactMe.isPending}
              >
                Submit {contactMe.isPending && <Loader />}
              </button>
            </form>
          </Section>
        </animated.div>
      </div>
      <Toaster />
    </div>
  )
}
