import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import React from 'react'
import Loader from './Loader'
import { ActiveAutomation } from '@/icons/active-automation'
import { useQueryAutomation } from '@/hooks/user-quries'
import { useMutationsData } from '@/hooks/use-mutations-data'
import { boolean } from 'zod'
import { activateAutomation } from '@/actions/automations'


type Props = {
  id: string
}

const ActivateAutomationButton = ({ id }: Props) => {
 const {data} = useQueryAutomation(id);
  const {mutate , isPending} = useMutationsData(
    ['activate'],
    (data: {state: boolean}) => activateAutomation(id, data.state),
    'automation-info'
  )
  return (
    <Button
    disabled={isPending}
          onClick={()=> mutate({state: !data?.data?.active })}
      className="lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70] ml-4"
    >
             {isPending ? <Loader2 className="animate-spin" /> : <ActiveAutomation />}
         <p className='hidden lg:block'>
      {data?.data?.active ? 'Disable' : 'Activate'}

         </p>
        
    </Button>
  )
}

export default ActivateAutomationButton