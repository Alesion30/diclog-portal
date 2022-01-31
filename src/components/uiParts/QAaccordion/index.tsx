import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useState } from 'react'

export type QAaccordionProps = {
  question: string
  answer: string
}

export const QAaccordion: React.VFC<QAaccordionProps> = ({
  question,
  answer,
}) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="space-y-6 text-left">
      <div
        className="flex cursor-pointer items-center hover:opacity-70 select-none"
        onClick={() => setOpen(!open)}
      >
        <p
          className={clsx(
            'font-bold text-2xl mr-7 pb-1',
            open ? 'text-gray-600' : 'text-red-500'
          )}
        >
          Q.
        </p>
        <h2 className={clsx('text-xl', open ? 'text-gray-800' : 'text-black')}>
          {question}
        </h2>
      </div>
      {open && (
        <motion.section
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: 'auto' },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          <div className="flex">
            <p className="text-red-500 font-bold text-2xl mr-7 pb-1 pl-1">A.</p>
            <h2 className="text-xl">{answer}</h2>
          </div>
        </motion.section>
      )}
      <hr />
    </div>
  )
}
