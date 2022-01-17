import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

const MyDocument: React.VFC = () => {
  return (
    <Html lang="ja" prefix="og: https://diclog-portal.vercel.app">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
