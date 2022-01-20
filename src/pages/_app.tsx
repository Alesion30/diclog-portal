import React from 'react'
import type { AppProps } from 'next/app'
import '~/styles/global.css'
import '~/styles/loading.css'
import { AnimatePresence } from 'framer-motion'
import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const MyApp: React.VFC<AppProps> = ({ Component, pageProps }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: true,
        refetchOnWindowFocus: false,
        staleTime: 300000,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RecoilRoot>
        <AnimatePresence exitBeforeEnter initial={true}>
          <DefaultSeo {...SEO} />
          <Head>
            <link rel="icon" href="favicon.svg" type="image/svg+xml" />
            <link rel="shortcut icon" href="favicon.svg" type="image/svg+xml" />

            <meta httpEquiv="x-ua-compatible" content="IE=edge; chrome=1" />
            <meta
              name="viewport"
              content="width=device-width,initial-scale=1"
            />

            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

            {/* Icon */}
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />

            {/* Googleフォント */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;700&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;700&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Lemonada:wght@300;400;700&display=swap"
              rel="stylesheet"
            />
          </Head>
          <Component {...pageProps} />
        </AnimatePresence>
      </RecoilRoot>
    </QueryClientProvider>
  )
}

export default MyApp
