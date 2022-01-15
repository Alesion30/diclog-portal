import React from 'react'
import type { AppProps } from 'next/app'
import '~/styles/global.css'
import '~/styles/loading.css'
import { AnimatePresence } from 'framer-motion'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import SEO from '../../next-seo.config'

const MyApp: React.VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AnimatePresence exitBeforeEnter initial={true}>
      <Head>
        <meta httpEquiv="x-ua-compatible" content="IE=edge; chrome=1" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
