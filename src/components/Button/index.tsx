import clsx from 'clsx'

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
      className={clsx(
        className,
        'flex items-center justify-center px-4 py-2 border shadow-sm text-base font-medium',
        full ? 'w-full' : '',
        rounded ? 'rounded-full' : 'rounded-md',
        outlined
          ? 'border-yellow-600 text-yellow-600 bg-white hover:bg-yellow-50'
          : 'border-transparent text-white bg-yellow-600 hover:bg-yellow-700'
      )}
    >
      {text}
    </button>
  )
}
