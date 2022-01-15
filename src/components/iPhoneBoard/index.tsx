import { useWindowDimensions } from '~/hooks/dimension'

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
  return (
    <div
      className="bg-gray-300 rounded-3xl shadow-md p-3"
      style={{ width: boardWidth, height: boardWidth * (2778 / 1284) }}
    >
      <div className="bg-white flex flex-col rounded-3xl w-full h-full overflow-y-scroll">
        <div className="flex justify-between items-center px-4 pt-2">
          <p className="text-sm font-bold">8:12</p>
          <img
            src="/assets/img/battery-full-solid.svg"
            style={{ height: 15 }}
          />
        </div>
        <div className="grow h-full">{children}</div>
        <div className="flex justify-center pb-3">
          <div className="w-28 h-1 bg-black rounded-full" />
        </div>
      </div>
    </div>
  )
}
