import clsx from 'clsx'
import { ReactNode } from 'react'

export default function Section({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={clsx(
        'flex flex-1 flex-col items-center justify-center gap-4 px-6 pb-4 md:px-11',
        className
      )}
    >
      {children}
    </div>
  )
}
