import React from 'react'
import { ExperienceCardProps } from 'components/experience-card'

export const technologies = [
  'React.js',
  'TanStack',
  'TypeScript',
  'Next.js',
  'Node.js',
  'Express',
  'AWS',
  'Tailwind CSS',
  'Jest',
  'Testing Library',
  'Storybook',
  'Figma'
]

export const experience: ExperienceCardProps[] = [
  {
    title: 'Senior Frontend Developer',
    company: 'Crowdcube',
    date: '12/2022 - 10/2024',
    description: (
      <p>
        Led the development of a new investor portfolio, delivering a seamless
        beta rollout. Spearheaded a NextJS migration to modernize the stack and
        mentored junior developers to elevate team performance. Collaborated in
        growth initiatives, driving innovation and revenue.
      </p>
    )
  },
  {
    title: 'Fullstack Developer',
    company: 'Koodoo',
    date: '10/2021 - 12/2022',
    description: (
      <p>
        Led the creation of a shared components library, introduced modern tools
        like TypeScript and microfrontends, and ensured {'>'}90% test coverage
        across legacy systems. Delivered key presentations and mentorship to
        elevate team standards and maintained backend systems with Express.
      </p>
    )
  },
  {
    title: 'Frontend Developer',
    company: 'Moneysupermarket',
    date: '04/2021 - 12/2021',
    description: (
      <p>
        Delivered flexible Vue-based microservices for CMS integration, built a
        Node.js CLI tool for faster deployments, and rebranded the site in
        collaboration with content teams, ensuring seamless API design.
      </p>
    )
  },
  {
    title: 'Frontend Developer (React)',
    company: 'i6 Group',
    date: '03/2020 - 04/2021',
    description: (
      <p>
        Integrated React apps into a cohesive product using microfrontends,
        authored a comprehensive style guide to streamline onboarding, and
        introduced modern practices with React Hooks to simplify workflows and
        reduce complexity.
      </p>
    )
  },
  {
    title: 'Frontend Developer (React Native)',
    company: 'School Spider',
    date: '04/2019 - 03/2020',
    description: (
      <p>
        Built and deployed a parent-facing app for schools in under a year,
        mastering React Native independently. Modernized development processes
        with React Hooks and optimized workflows across teams.
      </p>
    )
  },
  {
    title: 'Junior Frontend Developer',
    company: 'Picker',
    date: '04/2018 - 04/2019',
    description: (
      <p>
        Boosted homepage loading speeds by over 60% with lazy loading, managed
        the web app independently during critical development phases, and
        created tools for data analysis and influencer tracking.
      </p>
    )
  }
]
