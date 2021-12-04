import { Fragment } from 'react'
import { NextPage } from 'next'
import { Layout } from '~/layouts/default'
import { Button } from '~/components/Button'
import { Table, TableProps } from '~/components/Table'

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
  const total = 1000 // 登録単語総数

  const defaultArgs: TableProps = {
    columns: [
      { key: 'rank', name: '登録単語' },
      { key: 'word', name: '登録単語' },
      { key: 'count', name: '検索回数' },
    ],
    data: [
      {
        rank: 1,
        word: 'hoge',
        count: 20,
      },
      {
        rank: 2,
        word: 'hoge',
        count: 20,
      },
      {
        rank: 3,
        word: 'hoge',
        count: 20,
      },
      {
        rank: 4,
        word: 'hoge',
        count: 20,
      },
      {
        rank: 5,
        word: 'hoge',
        count: 20,
      },
    ],
  }

  return (
    <div className="py-10 flex justify-between content-between">
      <div>
        <h1 className="text-5xl font-bold">DicLog</h1>
        <p className="text-xl font-light mt-6">
          英単語学習サプリメントシステム
        </p>
        <Button text="導入方法はこちら" className="mt-4" />
        <p className="text-lg font-light mt-14">登録単語総数</p>
        <p className="text-3xl mt-2">{total.toLocaleString()}word</p>
        <p className="text-md font-light mt-7">単語ランキング</p>
        <Table {...defaultArgs} shadow className="mt-2 w-72" />
      </div>
      <div>
        <p className="text-md font-light">ユーザーランキング</p>
        <Table {...defaultArgs} shadow className="mt-2 w-72" />
        <p className="text-md font-light mt-7">辞書ランキング</p>
        <Table {...defaultArgs} shadow className="mt-2 w-72" />
      </div>
    </div>
  )
}

export default IndexPage
