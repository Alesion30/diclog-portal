import { motion } from 'framer-motion'
import { wrap } from 'popmotion'
import { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import { IPhoneBoard } from '../iPhoneBoard'

const variants = {
  enter: () => {
    return {
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

export const DiclogApp: React.VFC = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false)

  const [[page, direction], setPage] = useState([0, 0])

  const words = [
    {
      word: 'Hello',
      trans: 'こんにちは',
    },
    {
      word: 'Good',
      trans: '良い',
    },
    {
      word: 'He',
      trans: '彼',
    },
  ]

  const wordIndex = wrap(0, words.length, page)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <IPhoneBoard width={300}>
      <div className="flex flex-col h-full">
        <div className="flex justify-center py-2 border-b shadow-sm">
          <p className="text-base">ランダムで出題</p>
        </div>
        <div className="pt-2 pb-7 px-2 h-full">
          {words.length > 0 && (
            <motion.div
              key={`diclogApp_word_${page}`}
              className="h-full"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              drag
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={() => {
                paginate(1)
              }}
            >
              <ReactCardFlip isFlipped={isFlipped} containerClassName="h-full">
                <div
                  key="front"
                  onClick={() => setIsFlipped(true)}
                  className="bg-white flex justify-center items-center border rounded-lg shadow-lg w-full h-full"
                >
                  <p className="text-4xl select-none">
                    {words[wordIndex].word}
                  </p>
                </div>
                <div
                  key="back"
                  onClick={() => setIsFlipped(false)}
                  className="bg-white flex justify-center items-center border rounded-lg shadow-lg w-full h-full"
                >
                  <p className="text-4xl select-none">
                    {words[wordIndex].trans}
                  </p>
                </div>
              </ReactCardFlip>
            </motion.div>
          )}
        </div>
      </div>
    </IPhoneBoard>
  )
}
