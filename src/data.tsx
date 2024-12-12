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
      <ul className="flex list-inside list-disc flex-col gap-2">
        <li>
          Led development of the new investor portfolio, creating a beta version
          to slowly transition users to the new portfolio as it became more
          feature rich.
        </li>
        <li>
          Upgraded our tech stack by migrating custom patterns to the NextJS
          pages router, significantly improving the frontend architecture.
        </li>
        <li>
          Mentored less experienced developers, I involved them in decision
          making and encouraged them to take on more challenging work, advising
          them and pair programming where needed.
        </li>
      </ul>
    )
  },
  {
    title: 'Fullstack Developer',
    company: 'Koodoo',
    date: '10/2021 - 12/2022',
    description: (
      <ul className="flex list-inside list-disc flex-col gap-2">
        <li>
          Led the creation of a common components library for use across
          multiple teams.
        </li>
        <li>
          Introduced TypeScript, microfrontends, and Styled Components to
          modernize practices.
        </li>
        <li>
          Improved test coverage on legacy code to over 90% and maintained 100%
          on new components.
        </li>
        <li>
          Delivered presentations and mentorship to improve knowledge sharing
          and standards.
        </li>
        <li>Maintained backend systems written in Express.</li>
      </ul>
    )
  },
  {
    title: 'Frontend Developer',
    company: 'Moneysupermarket',
    date: '04/2021 - 12/2021',
    description: (
      <ul className="flex list-inside list-disc flex-col gap-2">
        <li>
          Built flexible component microservices in Vue to integrate with CMS.
        </li>
        <li>
          Created a CLI tool with Node.js to streamline deployment
          configurations.
        </li>
        <li>
          Rebranded the website based on Zeplin designs, collaborating with
          content teams to design APIs.
        </li>
      </ul>
    )
  },
  {
    title: 'Frontend Developer (React)',
    company: 'i6 Group',
    date: '03/2020 - 04/2021',
    description: (
      <ul className="flex list-inside list-disc flex-col gap-2">
        <li>
          Managed integration of existing React apps into a single product using
          microfrontends.
        </li>
        <li>
          Authored a frontend style guide to improve onboarding and consistency.
        </li>
        <li>
          Built a testing playground to compare frameworks like React Testing
          Library and Enzyme.
        </li>
        <li>Introduced React Hooks to modernize code and reduce complexity.</li>
      </ul>
    )
  },
  {
    title: 'Frontend Developer (React Native)',
    company: 'School Spider',
    date: '04/2019 - 03/2020',
    description: (
      <ul className="flex list-inside list-disc flex-col gap-2">
        <li>
          Developed a parent-facing app for school-related activities, deploying
          it within a year.
        </li>
        <li>
          Self-taught React Native to build and deploy mobile applications.
        </li>
        <li>Introduced React Hooks to modernize the development process.</li>
      </ul>
    )
  },
  {
    title: 'Junior Frontend Developer',
    company: 'Picker',
    date: '04/2018 - 04/2019',
    description: (
      <ul className="flex list-inside list-disc flex-col gap-2">
        <li>
          Reduced homepage loading speeds by over 60% through lazy loading and
          data restructuring.
        </li>
        <li>
          Independently managed and updated the web app during the CTO’s mobile
          app development.
        </li>
        <li>
          Built internal tools for managing data and analyzing influencer
          performance.
        </li>
      </ul>
    )
  }
]
