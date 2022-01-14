import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { useInView } from 'react-intersection-observer'

export type CardProps = {
  width?: number
  height?: number
  delay?: number
  children: React.ReactNode
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Card: React.VFC<CardProps> = ({
  width,
  height,
  delay,
  children,
  className,
  style,
  ...props
}) => {
  const { ref, inView } = useInView({
    rootMargin: '-50px',
    threshold: 0.5,
    delay: delay,
    triggerOnce: true,
  })

  return (
    <div
      style={{ width, height, ...style }}
      ref={ref}
      className={clsx(
        'bg-white shadow-lg rounded-lg px-8 py-12',
        inView ? 'animate-fadeIn' : 'opacity-0',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
