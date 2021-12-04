import React from 'react'
import { Header } from '~/components/Header'

type LayoutProps = {
  children: React.ReactChild
}

export const Layout: React.VFC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6">{children}</main>
    </div>
  )
}
