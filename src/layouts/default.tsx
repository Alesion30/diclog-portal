import React from 'react'
import Head from 'next/head'
import { Header } from '~/components/Header'

type LayoutProps = {
  children: React.ReactChild
}

export const Layout: React.VFC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Diclog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  )
}
