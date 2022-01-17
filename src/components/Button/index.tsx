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
        'flex items-center justify-center px-8 py-3 border shadow-md text-lg font-bold hover:opacity-70',
        full ? 'w-full' : '',
        rounded ? 'rounded-full' : 'rounded-md',
        outlined
          ? 'text-yellow-500 bg-white'
          : 'border-transparent text-white bg-yellow-500'
      )}
      {...props}
    >
      {text}
    </button>
  )
}
