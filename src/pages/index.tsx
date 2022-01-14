import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Image from 'next/image'
import clsx from 'clsx'
import { NextPage } from 'next'
import { useState } from 'react'
import { Button } from '~/components/Button'
import { Card } from '~/components/Card'
import { Container } from '~/components/Container'
import { Header } from '~/components/Header'
import { SlideShow } from '~/components/SlideShow'
import { useWindowDimensions } from '~/hooks/dimension'
import { Footer } from '~/components/Footer'

const TopPage: NextPage = () => {
  const { width } = useWindowDimensions()
  const [showHeader, setShowHeader] = useState(true)

  useScrollPosition(({ prevPos, currPos }) => {
    if (Math.abs(currPos.y - prevPos.y) > 10) {
      const visible = currPos.y > prevPos.y || currPos.y > -100
      setShowHeader(visible)
    }
  }, [])

  const images = ['/assets/img/home.png', '/assets/img/pc.png']

  return (
    <div>
      {/* ヘッダー */}
      <Container
        className={clsx(
          'w-full fixed top-5 z-50',
          !showHeader ? 'animate-up' : 'animate-down'
        )}
      >
        <Header />
      </Container>

      {/* TOP */}
      <div className={clsx(width >= 1100 ? 'pt-0' : 'pt-20')}>
        <Container>
          <div className="flex flex-wrap justify-evenly content-center items-center h-screen space-y-20">
            <div
              className="flex flex-col items-start space-y-8"
              style={{ width: width >= 1100 ? undefined : width - 80 }}
            >
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold leading-relaxed">
                  英単語学習
                  <br />
                  サプリメントシステム
                </h1>
                <p className="text-base">
                  chrome拡張と連携し、
                  <br />
                  自動であなただけの英単語帳を作成します。
                </p>
              </div>
              <Button text="Diclogをはじめる" />
            </div>
            <SlideShow
              images={images}
              width={width >= 1100 ? 700 : width - 80}
            />
          </div>
        </Container>
      </div>

      {/* Diclogとは？ */}
      <div className="min-h-screen bg-yellow-50">
        <Container className="py-28">
          <div className="flex flex-col justify-center items-center space-y-10">
            <div className="space-y-10 text-center">
              <h1 className="text-5xl font-bold">
                <span className="font-lemon">Diclog</span>とは？
              </h1>
              <p className="text-lg leading-relaxed whitespace-pre-wrap text-gray-700">
                Diclogは自分の経験に基づいて、『こないだ調べたあの単語』を『復習』することによって記憶の定着を図る英単語帳です。
                <br />
                しかも、単語登録の手間を完全に自動化してあります。DropboxやEvernoteを使っている人なら、自動同期の快適さは理解できると思います。
                <br />
                最初にChrome
                Extensionを入れる必要がありますが、その後はそのExtensionが自動的に調べた英単語を記録してくれます。
                <br />
                あとは、スマホでチェックして、消していくだけです。チェックするのは、トイレでも電車でも、ほんのちょっとした隙間時間です。
              </p>
            </div>
            <div className="flex flex-wrap justify-center">
              <Card
                className="flex justify-between m-5"
                maxWidth={520}
                minHeight={270}
              >
                <div className="w-60 space-y-3">
                  <h2 className="text-lg font-bold">
                    自分だけのMy単語帳が
                    <br />
                    出来上がります
                  </h2>
                  <p className="text-base leading-relaxed whitespace-pre-wrap text-gray-700">
                    Chrome&nbsp;
                    Extensionと連携するだけで、単語を調べていくうちにあなただけの単語帳が勝手に出来上がります。
                  </p>
                </div>
                <Image src="/assets/img/y0980.png" width={200} height={200} />
              </Card>
              <Card
                className="flex justify-between m-5"
                maxWidth={520}
                minHeight={270}
              >
                <div className="w-60 space-y-3">
                  <h2 className="text-lg font-bold">
                    ちょっとしたスキマ時間に
                    <br />
                    英単語学習
                  </h2>
                  <p className="text-base leading-relaxed whitespace-pre-wrap text-gray-700">
                    Extensionで自動的に登録された単語からランダムに出題します。
                  </p>
                </div>
                <Image src="/assets/img/y1150.png" width={200} height={200} />
              </Card>
              <Card
                className="flex justify-between m-5"
                maxWidth={520}
                minHeight={270}
              >
                <div className="w-60 space-y-3">
                  <h2 className="text-lg font-bold">
                    プッシュ通知で毎日継続的に
                    <br />
                    学習できます
                  </h2>
                  <p className="text-base leading-relaxed whitespace-pre-wrap text-gray-700">
                    1日1回、プッシュ通知で単語の意味をお聞きします。分からなければ、アプリを開いて意味を確認しましょう！
                  </p>
                </div>
                <Image src="/assets/img/y0327.png" width={200} height={200} />
              </Card>
            </div>
          </div>
        </Container>
      </div>

      {/* 使い方 */}
      <div className="bg-red-50">
        <Container className="py-28">
          <div className="flex flex-col justify-center items-center space-y-10">
            <div className="flex flex-wrap justify-center">
              <Card maxWidth={370} minHeight={280} className="m-5 text-center">
                <div className="space-y-6">
                  <p className="text-gray-700 text-lg font-bold">ステップ1</p>
                  <h2 className="text-xl font-bold">chrome拡張機能を有効化</h2>
                  <p>
                    chromeウェブストアからchrome拡張機能をダウンロードし、Googleアカウント等でログインします。
                  </p>
                </div>
              </Card>
              <Card
                maxWidth={370}
                minHeight={280}
                delay={500}
                className="m-5 text-center"
              >
                <div className="space-y-6">
                  <p className="text-gray-700 text-lg font-bold">ステップ2</p>
                  <h2 className="text-xl font-bold">英語辞書で英単語を検索</h2>
                  <p>対応する英語辞書で英単語を検索します</p>
                </div>
              </Card>
              <Card
                maxWidth={370}
                minHeight={280}
                delay={1000}
                className="m-5 text-center"
              >
                <div className="space-y-6">
                  <p className="text-gray-700 text-lg font-bold">ステップ3</p>
                  <h2 className="text-xl font-bold">アプリで学習</h2>
                  <p>
                    ストアからアプリをダウンロードします。あとは、自分だけの英単語帳でひたすら単語を覚える！
                  </p>
                </div>
              </Card>
            </div>
            <Button text="詳しい導入方法はこちら" outlined />
          </div>
        </Container>
      </div>

      {/* ランキング */}
      <div className="bg-white">
        <Container className="py-28">
          <div className="flex flex-col justify-center items-center space-y-10">
            <h1 className="text-5xl font-bold">ランキング</h1>
            <div className="flex flex-wrap justify-center">
              {/* ユーザーランキング */}
              <Card
                width={width >= 370 ? 370 : width - 80}
                className="m-5 text-center"
              >
                <div className="space-y-6">
                  {[
                    'Alesion',
                    'YMShun',
                    'techiro',
                    'Alesion',
                    'YMShun',
                    'techiro',
                    'Alesion',
                    'YMShun',
                    'techiro',
                  ].map((name, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-white rounded-lg border border-gray-700 hover:border-pink-600 px-4 py-2"
                      >
                        <div className="flex space-x-4">
                          <p className="text-lg font-bold text-green-600">
                            {index + 1}
                          </p>
                          <div className="bg-blue-500 w-8 h-8 rounded-lg"></div>
                          <p className="text-lg font-bold">{name}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Card>

              {/* 英単語ランキング */}
              <Card
                width={width >= 370 ? 370 : width - 80}
                className="m-5 text-center"
              >
                <div className="space-y-6">
                  {[
                    'Alesion',
                    'YMShun',
                    'techiro',
                    'Alesion',
                    'YMShun',
                    'techiro',
                    'Alesion',
                    'YMShun',
                    'techiro',
                  ].map((name, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-white rounded-lg border border-gray-700 hover:border-pink-600 px-4 py-2"
                      >
                        <div className="flex space-x-4">
                          <p className="text-lg font-bold text-green-600">
                            {index + 1}
                          </p>
                          <div className="bg-blue-500 w-8 h-8 rounded-lg"></div>
                          <p className="text-lg font-bold">{name}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Card>

              {/* 辞書ランキング */}
              <Card
                width={width >= 370 ? 370 : width - 80}
                className="m-5 text-center"
              >
                <div className="space-y-6">
                  {[
                    'Alesion',
                    'YMShun',
                    'techiro',
                    'Alesion',
                    'YMShun',
                    'techiro',
                    'Alesion',
                    'YMShun',
                    'techiro',
                  ].map((name, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-white rounded-lg border border-gray-700 hover:border-pink-600 px-4 py-2"
                      >
                        <div className="flex space-x-4">
                          <p className="text-lg font-bold text-green-600">
                            {index + 1}
                          </p>
                          <div className="bg-blue-500 w-8 h-8 rounded-lg"></div>
                          <p className="text-lg font-bold">{name}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </div>

      {/* アプリをダウンロード */}
      <div className="bg-gray-600">
        <Container className="py-20 text-center">
          <h2 className="text-white text-2xl font-bold">
            今すぐアプリ・Chrome拡張機能をダウンロード
          </h2>
          <div className="flex justify-center space-x-4 mt-8">
            <img
              src="/assets/img/google-play-badge.png"
              style={{ height: 60 }}
            />
            <img
              src="/assets/img/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
              style={{ height: 60 }}
            />
          </div>
        </Container>
      </div>

      {/* フッター */}
      <Footer />
    </div>
  )
}

export default TopPage
