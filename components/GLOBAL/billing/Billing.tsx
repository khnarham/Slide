'use client'
import React from 'react'
import PaymentCard from './PaymentCard'
import { useQueryUser } from '@/hooks/user-quries'

type Props = {}

const Billing = (props: Props) => {
  const {data} = useQueryUser();
  return (
    <div className='flex lg:flex-row flex-col gap-5 w-full  lg:w-10/12 xl:w-8/12 container' >
        <PaymentCard
        current={data?.data?.subscription?.plan!}
        label='FREE'
        />
        <PaymentCard
        current={data?.data?.subscription?.plan!}
        label='PRO'
        />
        </div>
  )
}

export default Billing