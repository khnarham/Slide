import { useQueryUser } from '@/hooks/user-quries'
import React from 'react'

type Props = {
    type: 'FREE' | 'PRO'
    children: React.ReactNode
}

const SubscriptionPlan = ({type , children} : Props) => {
  const {data} = useQueryUser()
  return (
        data?.data?.subscription?.plan === type && children
  )
}

export default SubscriptionPlan