import {
  Sheet as ShadcnSheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import React from 'react'

type Props = {
  trigger: React.ReactNode
  children: React.ReactNode
  className?: string
  side: 'left' | 'right'
}

const Sheet = ({ children, trigger, className, side }: Props) => {
  return (
    <ShadcnSheet>
      <SheetTrigger className={className}>{trigger}</SheetTrigger>
      <SheetContent
        side={side}
        className="p-0"
        >
        <SheetTitle></SheetTitle>
        {children}
      </SheetContent>
    </ShadcnSheet>
  )
}

export default Sheet