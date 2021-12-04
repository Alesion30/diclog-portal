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
        <title>DicLog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6">{children}</main>
    </div>
  )
}
