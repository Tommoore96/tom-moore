import clsx from 'clsx'
import React, { ReactNode } from 'react'

export type ExperienceCardProps = {
  title: string
  company: string
  date: string
  description: ReactNode
  className?: string
}

export default function ExperienceCard({
  title,
  company,
  date,
  description,
  className
}: ExperienceCardProps) {
  return (
    <div className={clsx('flex flex-col gap-3', className)}>
      <div className="flex flex-col gap-1">
        <h4 className="font-display text-sm">{date}</h4>
        <h3 className="font-display text-xl font-bold">
          {title} at {company} {date}
        </h3>
      </div>
      <div className="font-body text-sm">{description}</div>
    </div>
  )
}
