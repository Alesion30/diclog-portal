import { NextPage } from 'next'
import { Button } from '~/components/Button'
import { Container } from '~/components/Container'
import { IconImage } from '~/components/Image'

const TopPage: NextPage = () => {
  return (
    <div className="bg-gray-200 h-screen">
      <Container className="sticky top-5">
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
          <Button text="はじめる" />
        </header>
      </Container>
    </div>
  )
}

export default TopPage
