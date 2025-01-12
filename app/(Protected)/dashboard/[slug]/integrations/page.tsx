import { INTEGRATION_CARDS } from '@/constants/integration'
import React from 'react'
import IntegrationCard from './components/IntegrationCard'

type Props = {}

const page = ({}: Props) => {
  return (
    <div className='flex justify-center' >
      <div className='flex flex-col w-full lg:w-8/16 gap-y-5'>
         {INTEGRATION_CARDS.map((cards , i)=>(
          <IntegrationCard
          key={i}
          {...cards}
          />
         ))}
      </div>
    </div>
  )
}

export default page