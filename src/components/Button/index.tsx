import clsx from 'clsx'
import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

export type ButtonProps = {
  text: string
  full?: boolean
  rounded?: boolean
  outlined?: boolean
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export const Button: React.VFC<ButtonProps> = ({
  text,
  className,
  full = false,
  rounded = false,
  outlined = false,
  ...props
}) => {
  return (
    <button
      className={clsx(
        className,
        'flex items-center justify-center px-6 py-3 border shadow-sm text-base font-medium',
        full ? 'w-full' : '',
        rounded ? 'rounded-full' : 'rounded-md',
        outlined
          ? 'border-yellow-600 text-yellow-600 bg-white hover:bg-yellow-50'
          : 'border-transparent text-white bg-yellow-600 hover:bg-yellow-700'
      )}
      {...props}
    >
      {text}
    </button>
  )
}
