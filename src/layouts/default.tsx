import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import clsx from 'clsx'
import { useState } from 'react'
import { ScrollLink } from '~/components/ScrollLink'
import { Container } from '~/components/Container'
import { Header } from '~/components/Header'
import { Footer } from '~/components/Footer'
import { motion } from 'framer-motion'

type LayoutProps = {
  children: React.ReactNode
}

export const DefaultLayout: React.VFC<LayoutProps> = ({ children }) => {
  const [showHeader, setShowHeader] = useState<boolean>(true)
  const [showTopBtn, setShowTopBtn] = useState<boolean>(false)

  useScrollPosition(({ prevPos, currPos }) => {
    if (Math.abs(currPos.y - prevPos.y) > 10) {
      const visible = currPos.y > prevPos.y || currPos.y > -100
      setShowHeader(visible)
    }
    setShowTopBtn(Math.abs(currPos.y) > 500)
  }, [])

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="w-screen overflow-x-hidden">
        {/* TOPに戻るボタン */}
        <div
          className={clsx(
            'fixed bottom-10 right-10 z-40 opacity-0',
            showTopBtn ? 'animate-fadeIn' : 'animate-fadeOut'
          )}
        >
          <ScrollLink to="top">
            <button className="bg-white hover:opacity-70 w-14 h-14 border-transparent shadow-lg rounded-full flex justify-center items-center">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="chevron-up"
                className="fill-amber-500 w-6 h-6 svg-inline--fa fa-chevron-up fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
              </svg>
            </button>
          </ScrollLink>
        </div>

        {/* ヘッダー */}
        <Container
          className={clsx(
            'w-full fixed top-5 z-50',
            !showHeader ? 'animate-up' : 'animate-down'
          )}
        >
          <Header />
        </Container>

        {children}

        {/* フッター */}
        <Footer />
      </div>
    </motion.div>
  )
}
