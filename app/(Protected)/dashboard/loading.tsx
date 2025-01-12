
import Loader from '@/components/GLOBAL/Loader'
import React from 'react'

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Loader state >...Loading</Loader>
    </div>
  )
}

export default Loading