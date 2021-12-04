import { Fragment } from 'react'
import { NextPage } from 'next'
import { Layout } from '~/layouts/default'

// トップページ
const IndexPage: NextPage = () => (
  <Layout>
    <Fragment>
      <_TopSection />
    </Fragment>
  </Layout>
)

// 「トップ」セクション
export const _TopSection: React.VFC = () => {
  return (
    <div>
      <h1 className="text-4xl">DICLOG</h1>
      <p>英単語学習サプリメントシステム</p>
    </div>
  )
}

export default IndexPage
