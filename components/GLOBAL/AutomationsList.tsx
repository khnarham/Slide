'use client'

import { useMutationDataState } from '@/hooks/use-mutations-data'
import { useQueryAutomations } from '@/hooks/user-quries'
import { usePaths } from '@/hooks/UserName'
import Link from 'next/link'
import React, { useMemo } from 'react'
import CreateAutomation from './create-automation/CreateAutomation'
import { cn, getMonths } from '@/lib/utils'
import GradientButton from './GradientButton'
import { Button } from '../ui/button'

type Props = {}

const AutomationList = (props: Props) => {
  const { data } = useQueryAutomations()

  const { latestVariable } = useMutationDataState(['create-automation'])
  console.log(latestVariable)
  const { pathname } = usePaths()

  const optimisticUiData = useMemo(() => {
    if (data) {
      const test = [...data.data]
      return { data: test }
    }
    return data || { data: [] }
  }, [ data])

  const sortedData = useMemo(() => {
    if (optimisticUiData?.data) {
      return optimisticUiData.data.sort((a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      })
    }
    return []
  }, [optimisticUiData])

  if (data?.status !== 200 || data.data.length <= 0) {
    return (
      <div className="h-[70vh] flex justify-center items-center flex-col gap-y-3">
        <h3 className="text-lg text-gray-400">No Automations </h3>
        <CreateAutomation />
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-y-3">
      {sortedData.map((automation) => (
        <Link
          href={`${pathname}/${automation.id}`}
          key={automation.id}
          className="bg-[#1D1D1D] hover:opacity-80 transition duration-100 rounded-xl p-5 border-[1px] radial--gradient--automations flex border-[#545454]"
        >
          <div className="flex flex-col flex-1 items-start">
            <h2 className="text-xl font-semibold">{automation.name}</h2>
            <p className="text-[#9B9CA0] text-sm font-light mb-2">
              This is from the comment
            </p>

            {automation.keywords.length > 0 ? (
              <div className="flex gap-x-2 flex-wrap mt-3">
                {
                  //@ts-ignore
                  automation.keywords.map((keyword, key) => (
                    <div
                      key={keyword.id}
                      className={cn(
                        'rounded-full px-4 py-1 capitalize',
                        (0 + 1) % 1 == 0 &&
                          'bg-keyword-green/15 border-2 border-keyword-green',
                        (1 + 1) % 2 == 0 &&
                          'bg-keyword-purple/15 border-2 border-keyword-purple',
                        (2 + 1) % 3 == 0 &&
                          'bg-keyword-yellow/15 border-2 border-keyword-yellow',
                        (3 + 1) % 4 == 0 &&
                          'bg-keyword-red/15 border-2 border-keyword-red'
                      )}
                    >
                      {keyword.word}
                    </div>
                  ))
                }
              </div>
            ) : (
              <div className="rounded-full border-2 mt-3 border-dashed border-white/60 px-3 py-1">
                <p className="text-sm text-[#bfc0c3]">No Keywords</p>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-between">
            <p className="capitalize text-sm font-light text-[#9B9CA0]">
              {getMonths(automation.createdAt.getUTCMonth() + 1)}{' '}
              {automation.createdAt.getUTCDate() === 1
                ? `${automation.createdAt.getUTCDate()}st`
                : `${automation.createdAt.getUTCDate()}th`}{' '}
              {automation.createdAt.getUTCFullYear()}{' '}
              {`${automation.createdAt.getUTCHours()}:${automation.createdAt.getUTCMinutes()}:${automation.createdAt.getUTCSeconds()} UTC`}
            </p>

            {automation.listener?.listener === 'SMARTAI' ? (
              <GradientButton
                type="BUTTON"
                className="w-full bg-background-80 text-white hover:bg-background-80"
              >
                Smart AI
              </GradientButton>
            ) : (
              <Button className="bg-background-80 hover:bg-background-80 text-white">
                Standard
              </Button>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default AutomationList