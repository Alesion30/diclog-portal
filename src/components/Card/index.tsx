import clsx from 'clsx'
import { motion } from 'framer-motion'
import { CSSProperties } from 'react'
import { useInView } from 'react-intersection-observer'

export type CardProps = {
  width?: number
  height?: number
  delay?: number
  children: React.ReactNode
  className?: string
  style?: CSSProperties
}

export const Card: React.VFC<CardProps> = ({
  width,
  height,
  delay,
  children,
  className,
  style,
}) => {
  const { ref, inView } = useInView({
    rootMargin: '-50px',
    threshold: 0.5,
    delay: delay,
    triggerOnce: true,
  })

  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <motion.div
        ref={ref}
        style={{ width, height, ...style }}
        className={clsx(
          'bg-white shadow-lg rounded-lg px-8 py-12',
          inView ? 'animate-fadeIn' : 'opacity-0',
          className
        )}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
