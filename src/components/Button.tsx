import { classNames } from '~/functions/classNames'

export type ButtonProps = {
  text: string
  onClick?: () => void
  className?: string
  full?: boolean
}

export const Button: React.VFC<ButtonProps> = ({
  text,
  onClick,
  className,
  full,
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        className,
        'flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700',
        full ? 'w-full' : ''
      )}
    >
      {text}
    </button>
  )
}
