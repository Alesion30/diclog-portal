import React from 'react'
import type { AppProps } from 'next/app'
import '~/styles/global.css'
import { AnimatePresence } from 'framer-motion'

const MyApp: React.VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AnimatePresence exitBeforeEnter initial={true}>
      <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
