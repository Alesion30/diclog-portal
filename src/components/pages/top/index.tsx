import Image from 'next/image'
import { NextPage } from 'next'
import { Button } from '~/components/uiParts/Button'
import { Card } from '~/components/uiParts/Card'
import { Container } from '~/components/uiParts/Container'
import { SlideShow } from '~/components/uiParts/SlideShow'
import { useWindowDimensions } from '~/hooks/useDimension'
import { SubTitleText, TitleText } from '~/components/uiParts/Text'
import { QAaccordion } from '~/components/uiParts/QAaccordion'
import { AppleStoreImage, GoogleStoreImage } from '~/components/uiParts/Image'
import { useGlobalWordState } from '~/store/word'
import { ScrollLink } from '~/components/uiParts/ScrollLink'
import { useGlobalRankingState } from '~/store/ranking'
import { DefaultLayout } from '~/components/layouts/default'
import { DiclogApp } from './DiclogApp'
import { DiclogChromeEx } from './DiclogChromeEx'

const TopPage: NextPage = () => {
  const { width } = useWindowDimensions()
  const { resetWords } = useGlobalWordState()
  const ranking = useGlobalRankingState()
  const images = ['/assets/img/home.png', '/assets/img/pc.png']

  return (
    <DefaultLayout>
      {/* TOP */}
      <div
        id="top"
        style={{
          backgroundImage: 'url(/assets/img/bg-top-wave.svg)',
          backgroundPosition: 'top',
          backgroundRepeat: 'repeat-x',
        }}
      >
        <Container>
          <div className="flex flex-wrap justify-evenly content-center items-center py-52 space-y-20">
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
                  Chrome拡張機能と連携し、
                  <br />
                  自動であなただけの英単語帳を作成します。
                </p>
              </div>
              <ScrollLink to="tutorial">
                <Button text="Diclogを試してみる" />
              </ScrollLink>
            </div>
            <SlideShow
              images={images}
              width={width >= 1100 ? 700 : width - 80}
            />
          </div>
        </Container>
      </div>

      {/* Diclogとは？ */}
      <div id="about" className="bg-yellow-50">
        <Container className="py-28">
          <div className="flex flex-col justify-center items-center space-y-10">
            <div className="space-y-10 text-center">
              <TitleText>
                <span className="font-lemon mr-1">Diclog</span>とは？
              </TitleText>
              <SubTitleText>
                <span>
                  Diclogは自分の経験に基づいて、『こないだ調べたあの単語』を『復習』することによって記憶の定着を図る英単語帳です。
                </span>
                <span>
                  しかも、単語登録の手間を完全に自動化してあります。DropboxやEvernoteを使っている人なら、自動同期の快適さは理解できると思います。
                </span>
                <span>
                  最初にChrome拡張機能を入れる必要がありますが、その後はその拡張機能が自動的に調べた英単語を記録してくれます。あとは、スマホでチェックして、消していくだけです。チェックするのは、トイレでも電車でも、ほんのちょっとしたスキマ時間です。
                </span>
              </SubTitleText>
            </div>
            <div className="flex flex-wrap justify-center">
              <Card
                className="flex flex-wrap justify-center m-5"
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
                    Chrome拡張機能と連携するだけで、単語を調べていくうちにあなただけの単語帳が勝手に出来上がります。
                  </p>
                </div>
                <Image
                  src="/assets/img/y0980.png"
                  width={200}
                  height={200}
                  alt="y0980"
                />
              </Card>
              <Card
                className="flex flex-wrap justify-center m-5"
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
                    スマートフォンアプリで英単語学習ができます。拡張機能で自動的に登録された単語を気軽に学習できます。
                  </p>
                </div>
                <Image
                  src="/assets/img/y1150.png"
                  width={200}
                  height={200}
                  alt="y1150"
                />
              </Card>
              <Card
                className="flex flex-wrap justify-center m-5"
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
                <Image
                  src="/assets/img/y0327.png"
                  width={200}
                  height={200}
                  alt="y0327"
                />
              </Card>
            </div>
          </div>
        </Container>
      </div>

      {/* 使い方 */}
      <div id="usage" className="bg-red-50">
        <Container className="py-28">
          <div className="flex flex-col justify-center items-center space-y-10 text-center">
            <TitleText>
              <span className="font-lemon mr-1">Diclog</span>の使い方
            </TitleText>
            <SubTitleText>
              Diclogを始めるには、Chrome拡張機能とアプリのインストールが必要です。
            </SubTitleText>
            <div className="flex flex-wrap justify-center">
              <Card maxWidth={370} minHeight={320} className="m-5 text-center">
                <div className="space-y-6">
                  <p className="text-gray-700 text-lg font-bold">ステップ1</p>
                  <h2 className="text-xl font-bold">Chrome拡張機能を有効化</h2>
                  <p>
                    ChromeウェブストアからChrome拡張機能をダウンロードし、Googleアカウント等でログインします。
                    <br />
                    （※ベータ版については
                    <a
                      className="underline"
                      href="https://storage.googleapis.com/diclog-dev-public/build.zip"
                    >
                      こちら
                    </a>
                    からダウンロード可能です。）
                  </p>
                </div>
              </Card>
              <Card maxWidth={370} minHeight={320} className="m-5 text-center">
                <div className="space-y-6">
                  <p className="text-gray-700 text-lg font-bold">ステップ2</p>
                  <h2 className="text-xl font-bold">英語辞書で英単語を検索</h2>
                  <p>
                    対応する辞書サイトで英単語を検索します。検索した単語は自動であなたの英単語帳に登録されます。
                  </p>
                </div>
              </Card>
              <Card maxWidth={370} minHeight={320} className="m-5 text-center">
                <div className="space-y-6">
                  <p className="text-gray-700 text-lg font-bold">ステップ3</p>
                  <h2 className="text-xl font-bold">アプリで学習</h2>
                  <p>
                    ストアからアプリをダウンロードします。あとは、自分だけの英単語帳でひたすら単語を覚える！
                  </p>
                </div>
              </Card>
            </div>
            {/* <Button text="詳しい導入方法はこちら" /> */}
          </div>
        </Container>
      </div>

      {/* Diclogを試す */}
      <div id="tutorial" className="bg-green-50">
        <Container className="py-28">
          <div className="flex flex-col justify-center items-center space-y-12 text-center">
            <TitleText>
              <span className="font-lemon mr-1">Diclog</span>を試す
            </TitleText>

            {/* Chrome拡張機能 */}
            {width >= 600 && (
              <div className="flex flex-wrap w-full justify-evenly items-center">
                <div className="m-5">
                  <DiclogChromeEx />
                </div>
                <div className="text-left m-5 space-y-8">
                  <h2 className="text-3xl font-bold text-amber-500">
                    Chrome拡張機能
                  </h2>
                  <Card className="text-left">
                    <ol className="space-y-4 list-decimal pl-5">
                      <li className="text-base font-bold">
                        左のサイトで、調べたい英単語を
                        <br />
                        入力してください。
                      </li>
                      <li className="text-base font-bold">
                        翻訳ボタンを押すと、英単語が日本語に
                        <br />
                        翻訳されます。
                      </li>
                      <li className="text-base font-bold">
                        調べた単語が自動で登録されます。
                      </li>
                    </ol>
                  </Card>
                  <div className="w-full flex justify-center">
                    <Button
                      text="初期状態に戻す"
                      outlined
                      onClick={resetWords}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* ネイティブアプリ */}
            <div className="flex flex-wrap w-full justify-evenly items-center">
              <div className="m-5">
                <DiclogApp />
              </div>
              <div className="text-left m-5 space-y-8">
                <h2 className="text-3xl font-bold text-amber-500">
                  スマホアプリ
                </h2>
                <Card className="text-left">
                  <ol className="space-y-4 list-decimal pl-5">
                    <li className="text-base font-bold">
                      Chrome拡張機能で登録した単語をアプリで
                      <br />
                      確認できます。
                    </li>
                    <li className="text-base font-bold">
                      タップすると、単語の意味が表示されます。
                    </li>
                    <li className="text-base font-bold">
                      スワイプすると次の単語が表示されます。
                    </li>
                  </ol>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ランキング */}
      <div id="ranking" className="bg-blue-50">
        <Container className="py-28">
          <div className="flex flex-col justify-center items-center space-y-10 text-center">
            <TitleText>
              <span className="font-lemon mr-1">Diclog</span>のランキング
            </TitleText>
            <SubTitleText>
              よく勉強しているユーザー・よく検索されている英単語・よく使われている辞書をランキング形式でTOP10まで紹介します。
            </SubTitleText>
            <div className="flex flex-wrap justify-center">
              {/* ユーザーランキング */}
              <Card
                width={width >= 370 ? 370 : width - 80}
                className="m-5 text-center space-y-8"
              >
                <h2 className="text-xl font-bold">ユーザーランキング</h2>
                <div className="space-y-6">
                  {ranking.state.users.map((user, index) => {
                    return (
                      <div
                        key={`user_rank_${index}`}
                        className="bg-white rounded-lg border border-gray-700 hover:border-pink-600 px-4 py-2"
                      >
                        <div className="flex space-x-4">
                          <p className="text-lg font-bold text-green-600">
                            {index + 1}
                          </p>
                          {user.photoURL && (
                            <img
                              src={user.photoURL}
                              className="w-8 h-8 rounded-lg"
                              alt=""
                            />
                          )}
                          {!user.photoURL && (
                            <div className="bg-blue-500 w-8 h-8 rounded-lg"></div>
                          )}
                          <p className="text-lg font-bold">{user.nickName}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Card>

              {/* 英単語ランキング */}
              <Card
                width={width >= 370 ? 370 : width - 80}
                className="m-5 text-center space-y-8"
              >
                <h2 className="text-xl font-bold">英単語ランキング</h2>
                <div className="space-y-6">
                  {ranking.state.words.map((word, index) => {
                    return (
                      <div
                        key={`word_rank_${index}`}
                        className="bg-white rounded-lg border border-gray-700 hover:border-pink-600 px-4 py-2"
                      >
                        <div className="flex space-x-4">
                          <p className="text-lg font-bold text-green-600">
                            {index + 1}
                          </p>
                          <p className="text-lg font-bold">{word.value}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Card>

              {/* 辞書ランキング */}
              <Card
                width={width >= 370 ? 370 : width - 80}
                className="m-5 text-center space-y-8"
              >
                <h2 className="text-xl font-bold">辞書ランキング</h2>
                <div className="space-y-6">
                  {ranking.state.dictionaries.map((dic, index) => {
                    return (
                      <div
                        key={`dic_rank_${index}`}
                        className="bg-white rounded-lg border border-gray-700 hover:border-pink-600 px-4 py-2"
                      >
                        <div className="flex space-x-4">
                          <p className="text-lg font-bold text-green-600">
                            {index + 1}
                          </p>
                          <p className="text-lg font-bold">{dic.name}</p>
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

      {/* よくある質問 */}
      <div id="question" className="bg-purple-50">
        <Container className="py-28">
          <div className="flex flex-col justify-center items-center space-y-24 text-center">
            <TitleText>よくある質問</TitleText>
            <div className="flex flex-col space-y-6 w-4/5">
              <QAaccordion
                question="アプリだけの利用はできますか？"
                answer="Chrome拡張機能経由でのみ単語を登録できるので、アプリだけの利用はできません。"
              />
              <QAaccordion
                question="対応する辞書サイトはなんですか？"
                answer="2022年1月時点では、weblio・英次郎・英ナビ！・DeepL翻訳・Google翻訳に対応しています。"
              />
              <QAaccordion
                question="Google Chrome以外のブラウザは使用できますか？"
                answer="Chrome拡張機能のみの提供になるので、Google Chrome以外のブラウザは使用できません。"
              />
            </div>
            <Button text="その他の質問はこちら" />
          </div>
        </Container>
      </div>

      {/* アプリをダウンロード */}
      <div className="bg-gray-600">
        <Container className="py-20 text-center">
          <h2 className="text-white text-2xl font-bold">
            今すぐアプリ・Chrome拡張機能をダウンロード
          </h2>
          <div className="flex flex-wrap justify-center items-center mt-6">
            <AppleStoreImage className="m-5" height={60} />
            <GoogleStoreImage className="m-5" height={60} />
          </div>
        </Container>
      </div>
    </DefaultLayout>
  )
}

export default TopPage
