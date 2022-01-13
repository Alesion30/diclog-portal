import { NextPage } from 'next'
import Image from 'next/image'
import { Button } from '~/components/Button'
import { Container } from '~/components/Container'
import { IconImage } from '~/components/Image'

const TopPage: NextPage = () => {
  return (
    <div className="">
      {/* ヘッダー */}
      <Container className="w-full fixed top-5">
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
      <div className="h-screen">
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
    </div>
  )
}

export default TopPage
