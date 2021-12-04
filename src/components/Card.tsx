import { classNames } from '~/functions/classNames'

export type CardProps = {
  children: React.ReactChild
  className?: string
  shadow?: boolean
}

export const Card: React.VFC<CardProps> = ({
  children,
  className,
  shadow = false,
}) => {
  return (
    <div
      className={classNames(
        className,
        shadow ? 'shadow-md' : '',
        'bg-white border rounded-md'
      )}
    >
      {children}
    </div>
  )
}
