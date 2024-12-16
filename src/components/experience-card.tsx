import { TriangleRightIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'
import React, { forwardRef, ReactNode } from 'react'

export type ExperienceCardProps = {
  title: string
  company: string
  date: string
  description: ReactNode
  className?: string
}

const ExperienceCard = forwardRef<HTMLDivElement, ExperienceCardProps>(
  ({ title, company, date, description, className }, ref) => {
    return (
      <div
        className={clsx('relative flex flex-col gap-3', className)}
        ref={ref}
      >
        <div className="absolute left-[-21.5px] top-1/2 -translate-y-1/2">
          <TriangleRightIcon className="size-6 text-charcoal" />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="font-body text-sm">{date}</h4>
          <h3 className="font-display text-xl font-bold">
            {title} at {company}
          </h3>
        </div>
        <div className="font-body text-sm">{description}</div>
      </div>
    )
  }
)

ExperienceCard.displayName = 'ExperienceCard'

export default ExperienceCard
