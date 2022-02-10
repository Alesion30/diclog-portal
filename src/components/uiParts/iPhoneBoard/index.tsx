import { useEffect, useState } from 'react'
import { useWindowDimensions } from '~/hooks/useDimension'
import dayjs from '~/plugins/dayjs'

export type IPhoneBoardProps = {
  children?: React.ReactNode
  width?: number
}

export const IPhoneBoard: React.VFC<IPhoneBoardProps> = ({
  children,
  width = 300,
}) => {
  const dimension = useWindowDimensions()
  const boardWidth = dimension.width >= width ? width : dimension.width - 80

  const [time, setTime] = useState<Date>(new Date())
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    })
    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className="bg-gray-300 rounded-3xl shadow-md relative p-3"
      style={{ width: boardWidth, height: boardWidth * (2778 / 1284) }}
    >
      <div className="bg-white flex flex-col rounded-3xl w-full h-full overflow-y-scroll">
        <div className="flex justify-between items-center w-full absolute top-6 left-0 px-8">
          <p className="text-sm font-bold">{dayjs(time).format('H:mm')}</p>
          <img
            src="/assets/img/battery-full-solid.svg"
            alt="battery"
            style={{ height: 15 }}
          />
        </div>
        <div className="grow h-full pt-6">{children}</div>
        <div className="flex justify-center w-full absolute bottom-4 left-0">
          <div className="w-28 h-1 bg-black rounded-full" />
        </div>
      </div>
    </div>
  )
}
