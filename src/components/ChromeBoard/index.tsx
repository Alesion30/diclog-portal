import { useWindowDimensions } from '~/hooks/dimension'

export type ChromeBoardProps = {
  children?: React.ReactNode
  width?: number
}

export const ChromeBoard: React.VFC<ChromeBoardProps> = ({
  children,
  width = 700,
}) => {
  const dimension = useWindowDimensions()
  const boardWidth = dimension.width >= width ? width : dimension.width - 80
  return (
    <div
      className="bg-white rounded-md shadow-md m-5"
      style={{ width: boardWidth, height: boardWidth * (960 / 1280) }}
    >
      <div className="bg-gray-700 w-full h-6 rounded-t-md flex items-center px-2 space-x-1">
        <div className="bg-red-400 w-2 h-2 rounded-full" />
        <div className="bg-yellow-400 w-2 h-2 rounded-full" />
        <div className="bg-green-400 w-2 h-2 rounded-full" />
      </div>
      <div className="rounded-b-md w-full h-full">{children}</div>
    </div>
  )
}
