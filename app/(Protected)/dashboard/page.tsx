import React from 'react'
import Loading from './loading';
import { onBoardUser } from '@/actions/User';
import { redirect } from 'next/navigation';

type Props = {}

const page = async(props: Props) => {
  const user = await onBoardUser();
  if (user.status === 200 || user.status === 201) {
    return redirect(`dashboard/${user.data?.firstname}${user.data?.lastname}`)
}
   return redirect('/sign-in')

}
export default page;