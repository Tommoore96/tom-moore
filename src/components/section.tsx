import { ReactNode } from 'react'

import { forwardRef, Ref } from 'react'
import cn from '../utils'

const Section = forwardRef(function Section(
  {
    children,
    className
  }: {
    children: ReactNode
    className?: string
  },
  ref: Ref<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      className={cn(
        'flex flex-1 flex-col items-center justify-center gap-4 px-6 pb-4 md:px-11',
        className
      )}
    >
      {children}
    </div>
  )
})

export default Section
