import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

const MyDocument: React.VFC = () => {
  const title = 'diclog'
  const description = '英単語学習サプリメントシステム'

  return (
    <Html lang="ja">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
