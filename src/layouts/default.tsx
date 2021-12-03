import React from 'react'
import { Header } from '~/components/Header'

type LayoutProps = {
  children: React.ReactChild
}

export const Layout: React.VFC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="container mx-auto">{children}</main>
    </div>
  )
}
