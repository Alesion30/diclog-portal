import React, { Fragment } from 'react'
import { NextPage } from 'next'
import { Layout } from '~/layouts/default'
import { Button } from '~/components/Button'
import { Table, TableProps } from '~/components/Table'
import { Card } from '~/components/Card'
import { DummyImage } from '~/components/Image'
import { classNames } from '~/functions/classNames'
import { Tabs } from '~/components/Tabs'
import { Container } from '~/components/Container'

// トップページ
const IndexPage: NextPage = () => (
  <Layout>
    <Fragment>
      <_TopSection />
      <_AboutSection />
      <_InstallSection />
    </Fragment>
  </Layout>
)

// 「TOP」
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
    <Container id="top" className="pt-10 pb-32">
      <div className="flex justify-between content-between">
        <div className="flex-initial">
          <h1 className="text-5xl font-bold">Diclog</h1>
          <p className="text-xl font-light mt-6">
            英単語学習サプリメントシステム
          </p>
          <Button text="導入方法はこちら" className="mt-4" />
          <p className="text-lg font-light mt-14">登録単語総数</p>
          <p className="text-3xl mt-2">{total.toLocaleString()}word</p>

          {/* 単語ランキング */}
          <p className="text-md font-light mt-7">単語ランキング</p>
          <Card className="mt-2 px-6 py-4" shadow>
            <Table {...defaultArgs} className="w-64" />
          </Card>
        </div>
        <div className="flex-initial">
          {/* ユーザーランキング */}
          <p className="text-md font-light">ユーザーランキング</p>
          <Card className="mt-2 px-6 py-4" shadow>
            <Table {...defaultArgs} className="w-64" />
          </Card>

          {/* 辞書ランキング */}
          <p className="text-md font-light mt-7">辞書ランキング</p>
          <Card className="mt-2 px-6 py-4" shadow>
            <Table {...defaultArgs} className="w-64" />
          </Card>
        </div>
      </div>
    </Container>
  )
}

// 「Diclogとは」
export const _AboutSection: React.VFC = () => {
  const list: { title: string; description: string }[] = [
    {
      title: '自分だけのMy単語帳が\n出来上がります',
      description:
        'Chrome Extensionと連携するだけで、\n単語を調べていくうちにあなただけの単語帳が\n勝手に出来上がります。',
    },
    {
      title: 'ちょっとしたスキマ時間に\n英単語学習',
      description:
        'Extensionで自動的に登録された単語から\nランダムに出題します。',
    },
    {
      title: 'プッシュ通知で毎日継続的に学習できます',
      description:
        '1日1回、プッシュ通知で単語の意味を\nお聞きします。分からなければ、\nアプリを開いて意味を確認しましょう！',
    },
  ]

  return (
    <Container id="about" className="bg-blue-100 bg-opacity-20 py-20">
      <div className="text-center">
        <h1 className="my-5 text-5xl font-bold text-indigo-800">Diclogとは</h1>
        <p className="mt-10 mb-40 text-lg leading-relaxed whitespace-pre-wrap">
          {
            'Diclogは自分の経験に基づいて、『こないだ調べたあの単語』を『復習』することによって記憶の定着を図る英単語帳です。\nしかも、単語登録の手間を完全に自動化してあります。DropboxやEvernoteを使っている人なら、自動同期の快適さは理解できると思います。\n最初にChrome Extensionを入れる必要がありますが、その後はそのExtensionが自動的に調べた英単語を記録してくれます。\nあとは、スマホでチェックして、消していくだけです。チェックするのは、トイレでも電車でも、ほんのちょっとした隙間時間です。'
          }
        </p>
        {list.map((v, i) => {
          return (
            <div
              key={`about_section_row_${i}`}
              className={classNames(
                i % 2 !== 0 ? 'flex-row-reverse' : '',
                'my-28 flex justify-center items-stretch'
              )}
            >
              <div className="mx-10">
                <DummyImage width={500} />
              </div>
              <div className="mx-10 w-96 self-center">
                <h2 className="text-3xl font-bold text-indigo-800 leading-normal whitespace-pre-wrap">
                  {v.title}
                </h2>
                <p className="mt-4 text-lg leading-normal whitespace-pre-wrap">
                  {v.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </Container>
  )
}

// 「導入方法」
export const _InstallSection: React.VFC = () => {
  const chromes: { title: string; description: string }[] = [
    {
      title: 'chrome extensionのダウンロード',
      description: 'ストアからchrome extensionをダウンロードします。',
    },
    {
      title: 'chrome extensionのダウンロード',
      description: 'ストアからchrome extensionをダウンロードします。',
    },
    {
      title: 'chrome extensionのダウンロード',
      description: 'ストアからchrome extensionをダウンロードします。',
    },
    {
      title: 'chrome extensionのダウンロード',
      description: 'ストアからchrome extensionをダウンロードします。',
    },
  ]

  return (
    <Container id="install" className="py-20">
      <div className="text-center">
        <h1 className="my-5 text-5xl font-bold text-indigo-800">導入方法</h1>
        <Tabs
          className="py-10"
          tabs={[
            {
              name: 'chrome extension',
              children: (
                <div>
                  {chromes.map((v, i) => {
                    return (
                      <div
                        key={`chrome_${i}`}
                        className="flex justify-center py-5"
                      >
                        <div className="mx-5">
                          <DummyImage width={300} />
                        </div>
                        <div className="mx-5 self-center">
                          <h2 className="text-2xl font-bold text-indigo-800">
                            {i + 1}. {v.title}
                          </h2>
                          <p className="mt-2 text-lg leading-normal whitespace-pre-wrap">
                            {v.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              ),
            },
            {
              name: 'スマートフォンアプリ',
              children: (
                <div>
                  <h1>スマートフォンアプリ</h1>
                </div>
              ),
            },
          ]}
        />
      </div>
    </Container>
  )
}

export default IndexPage
