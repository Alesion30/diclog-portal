import { NextPage } from 'next'
import Image from 'next/image'
import { Button } from '~/components/Button'
import { Container } from '~/components/Container'
import { DummyImage, IconImage } from '~/components/Image'

const TopPage: NextPage = () => {
  return (
    <div className="">
      {/* ヘッダー */}
      <Container className="w-full fixed top-5 z-10">
        <header className="bg-white justify-between content-center rounded-full flex px-10 py-5 shadow-lg">
          <div className="flex space-x-10 items-center">
            <div className="flex space-x-2 content-center">
              <IconImage width={40} />
              <h1 className="text-3xl font-bold font-lemon mt-1">Diclog</h1>
            </div>
            <nav className="flex space-x-7 justify-center">
              <ol className="text-lg font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
                Diclogとは
              </ol>
              <ol className="text-lg font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
                導入方法
              </ol>
              <ol className="text-lg font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
                よくある質問
              </ol>
              <ol className="text-lg font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
                お問い合わせ
              </ol>
            </nav>
          </div>
        </header>
      </Container>

      {/* TOP */}
      <div className="min-h-screen">
        <Container>
          <div className="flex justify-evenly items-center h-screen">
            <div className="space-y-8">
              <div className="space-y-2">
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
              <Button text="Diclogをはじめる" outlined />
            </div>
            <Image
              src="/assets/img/pc.png"
              width={700}
              height={(700 * 1400) / 1020}
              objectFit="contain"
              alt="画像"
            />
          </div>
        </Container>
      </div>

      {/* Diclogとは？ */}
      <div className="min-h-screen bg-yellow-50">
        <Container>
          <div className="flex flex-col justify-center items-center py-28 space-y-10">
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
              {[1, 2, 3, 4].map((_, index) => {
                return (
                  <div
                    key={index}
                    style={{ width: 520 }}
                    className="bg-white shadow-lg rounded-md flex justify-between px-8 py-12 m-5"
                  >
                    <div style={{ width: 232 }} className="space-y-3">
                      <h2 className="text-lg font-bold">
                        自分だけのMy単語帳が出来上がります
                      </h2>
                      <p className="text-base leading-relaxed whitespace-pre-wrap text-gray-700">
                        Chrome&nbsp;
                        Extensionと連携するだけで、単語を調べていくうちにあなただけの単語帳が勝手に出来上がります。
                      </p>
                    </div>
                    <DummyImage width={200} />
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default TopPage
