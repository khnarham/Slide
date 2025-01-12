import { SIDEBAR_MENU } from '@/constants/menu'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

type Props = {
    page: string,
    slug: string,
}

const Items = ({page ,slug} : Props) => {
  return (
    SIDEBAR_MENU.map((items, index) => (
      <Link
      key={index}
      href={`/dashboard/${slug}/${items.label === 'home' ? '/' : items.label}`}
      className={cn("capitalize flex gap-2 rounded-full p-3" ,   page === items.label && 'bg-[#0f0f0f]',
        page === slug && items.label === 'home'
          ? 'bg-[#0f0f0f]'
          : 'text-[#9B9CA0]')
      }
      >
        {items.icon}
        {items.label}
      </Link>
    ))
  )
}

export default Items