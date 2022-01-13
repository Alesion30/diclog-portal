import { classNames } from '~/functions/classNames'
import { IconImage } from '../Image'

export type LoadingProps = {
  className?: string
  style?: React.CSSProperties
}

export const Loading: React.VFC<LoadingProps> = ({ className, style }) => {
  return (
    <div className={classNames('text-center', className)} style={style}>
      <div className="m-0 w-72 h-72 relative">
        <div className="absolute bottom-2 right-36">
          <IconImage className="loading-icon1 opacity-0" width={40} />
        </div>
        <div className="absolute bottom-8 right-24">
          <IconImage className="loading-icon2 opacity-0" width={40} />
        </div>
        <div className="absolute bottom-20 right-32">
          <IconImage className="loading-icon3 opacity-0" width={40} />
        </div>
        <div className="absolute bottom-28 right-16">
          <IconImage className="loading-icon4 opacity-0" width={40} />
        </div>
      </div>
      <div className="mt-4">
        <p className="text-4xl font-bold tracking-widest text-gray-700">
          Loading
        </p>
      </div>
    </div>
  )
}
