import React from 'react'
import { ExperienceCardProps } from './components/experience-card'

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
    date: '2022 - 2024',
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
    date: '2021 - 2022',
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
    title: 'Frontend Developer (React)',
    company: 'i6 Group',
    date: '2020 - 2021',
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
    date: '2019 - 2020',
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
    date: '2018 - 2019',
    description: (
      <p>
        Boosted homepage loading speeds by over 60% with lazy loading, managed
        the web app independently during critical development phases, and
        created tools for data analysis and influencer tracking.
      </p>
    )
  },
  {
    title: 'Full Stack Development Student',
    company: 'Codeworks',
    date: '2017 - 2018',
    description: (
      <p>
        Attended Codeworks, Europe’s most intensive coding bootcamp, where I
        trained 12 hours a day, 6 days a week for 12 weeks. Diving straight into
        JavaScript, React, Node.js, and Agile methodologies through hands-on
        projects. Developed the ability to learn new technologies independently
        through practical and theoretical work. This program solidified my
        foundation in full-stack development and prepared me for real-world
        software engineering roles.
      </p>
    )
  }
]
