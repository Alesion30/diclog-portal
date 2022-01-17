// https://codesandbox.io/s/framer-motion-image-gallery-pqvx3?from-embed
import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from 'popmotion'
import clsx from 'clsx'
import useInterval from '~/hooks/useInterval'

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    }
  },
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

export type SlideShowProps = {
  images: string[]
  width: number
  aspectRatio?: number
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const SlideShow: React.VFC<SlideShowProps> = ({
  images,
  width,
  aspectRatio = 1280 / 720,
  className,
  ...props
}) => {
  const [[page, direction], setPage] = useState([0, 0])

  const imageIndex = wrap(0, images.length, page)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  const movePage = (index: number) => {
    setPage([index, 0])
  }

  useInterval(() => {
    paginate(1)
  }, 5000)

  return (
    <div className="flex flex-col items-center space-y-6">
      <div
        className={clsx('relative overflow-hidden', className)}
        style={{ width, height: width / aspectRatio }}
        {...props}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={`slide_show_${page}`}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
            className="absolute"
            alt="img"
          />
        </AnimatePresence>
        <div
          className="bg-white flex justify-center items-center w-8 h-8 rounded-full absolute text-2xl font-bold z-10 right-4 cursor-pointer select-none"
          style={{ top: 'calc(50% - 20px)' }}
          onClick={() => paginate(1)}
        >
          {'‣'}
        </div>
        <div
          className="bg-white flex justify-center items-center w-8 h-8 rounded-full absolute text-2xl font-bold z-10 left-4 cursor-pointer select-none"
          style={{ top: 'calc(50% - 20px)', transform: 'scale(-1)' }}
          onClick={() => paginate(-1)}
        >
          {'‣'}
        </div>
      </div>
      <div className="flex space-x-3">
        {images.map((_, index) => {
          const isActive = index === imageIndex
          return (
            <div
              key={`slide_show_dot_${index}`}
              className={clsx(
                'w-3 h-3 rounded-full cursor-pointer',
                isActive ? 'bg-yellow-500' : 'border border-yellow-500'
              )}
              onClick={() => movePage(index)}
            />
          )
        })}
      </div>
    </div>
  )
}
