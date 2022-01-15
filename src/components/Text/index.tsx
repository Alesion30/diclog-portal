import clsx from 'clsx'

export type TextProps = {
  children: React.ReactNode
  className?: string
}

export const TitleText: React.VFC<TextProps> = ({ children, className }) => {
  return <h1 className={clsx('text-5xl font-bold', className)}>{children}</h1>
}

export const SubTitleText: React.VFC<TextProps> = ({ children, className }) => {
  return (
    <p
      className={clsx(
        'text-lg leading-relaxed whitespace-pre-wrap text-gray-700',
        className
      )}
    >
      {children}
    </p>
  )
}
