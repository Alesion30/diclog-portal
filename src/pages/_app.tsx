import React from 'react'
import type { AppProps } from 'next/app'
import '~/styles/global.css'
import '~/styles/loading.css'
import { AnimatePresence } from 'framer-motion'
import { DefaultSeo } from 'next-seo'

const MyApp: React.VFC<AppProps> = ({ Component, pageProps }) => {
  const title = 'Diclog'
  const description =
    'Diclogは自分の経験に基づいて、『こないだ調べたあの単語』を『復習』することによって記憶の定着を図る英単語帳です。しかも、単語登録の手間を完全に自動化してあります。DropboxやEvernoteを使っている人なら、自動同期の快適さは理解できると思います。最初にChrome Extensionを入れる必要がありますが、その後はそのExtensionが自動的に調べた英単語を記録してくれます。あとは、スマホでチェックして、消していくだけです。チェックするのは、トイレでも電車でも、ほんのちょっとした隙間時間です。'
  const url = 'https://diclog-portal.vercel.app'

  return (
    <AnimatePresence exitBeforeEnter initial={true}>
      <DefaultSeo
        defaultTitle={title}
        canonical={url}
        description={description}
        openGraph={{
          type: 'website',
          title: title,
          description: description,
          site_name: title,
          url: url,
          images: [
            {
              url: '/assets/img/ogp.png',
              width: 1280,
              height: 640,
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
