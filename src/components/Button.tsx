import { classNames } from '~/functions/classNames'

export type ButtonProps = {
  text: string
  onClick?: () => void
  className?: string
  full?: boolean
  rounded?: boolean
  outlined?: boolean
}

export const Button: React.VFC<ButtonProps> = ({
  text,
  onClick,
  className,
  full = false,
  rounded = false,
  outlined = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        className,
        'flex items-center justify-center px-4 py-2 border shadow-sm text-base font-medium',
        full ? 'w-full' : '',
        rounded ? 'rounded-full' : 'rounded-md',
        outlined
          ? 'border-indigo-600 text-indigo-600 bg-white hover:bg-indigo-50'
          : 'border-transparent text-white bg-indigo-600 hover:bg-indigo-700'
      )}
    >
      {text}
    </button>
  )
}
