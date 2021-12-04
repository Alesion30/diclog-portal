import Head from 'next/head'
import { Header } from '~/components/Header'
import { Footer } from '~/components/Footer'
import { Loading } from '~/components/Loading'
import { motion } from 'framer-motion'

type LayoutProps = {
  children: React.ReactChild
  loading?: boolean
}

export const Layout: React.VFC<LayoutProps> = ({
  children,
  loading = false,
}) => {
  return (
    <div>
      <Head>
        <title>Diclog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {(() => {
        if (!loading) {
          return (
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Header />
              <main>{children}</main>
              <Footer />
            </motion.div>
          )
        } else {
          return (
            <div className="w-screen h-screen relative">
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Loading
                  className="absolute top-1/2 left-1/2"
                  style={{ transform: 'translateY(-70%) translateX(-50%)' }}
                />
              </motion.div>
            </div>
          )
        }
      })()}
    </div>
  )
}
