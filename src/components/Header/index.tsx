import { IconImage } from '~/components/Image'

export const Header: React.VFC = () => {
  return (
    <header className="bg-white w-full justify-between content-center rounded-full flex px-10 py-5 shadow-lg">
      <div className="flex space-x-10 items-center">
        <div className="flex space-x-2 content-center">
          <IconImage width={40} />
          <h1 className="text-3xl font-bold font-lemon mt-1">Diclog</h1>
        </div>
        <nav className="hidden lg:flex space-x-7 justify-center">
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
  )
}
