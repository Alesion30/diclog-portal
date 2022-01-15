import { IconImage } from '~/components/Image'
import { ScrollLink } from '../ScrollLink'

export const Header: React.VFC = () => {
  return (
    <header className="bg-white w-full justify-between content-center rounded-full flex px-6 lg:px-14 py-5 shadow-lg">
      <a href="/">
        <div className="flex space-x-2 content-center">
          <IconImage width={40} />
          <h1 className="text-3xl font-bold font-lemon mt-1">Diclog</h1>
        </div>
      </a>
      <ul className="hidden lg:flex space-x-7 justify-center items-center">
        <li className="text-lg font-medium text-gray-500 hover:text-gray-900 cursor-pointer list-none">
          <ScrollLink to="about">Diclogとは</ScrollLink>
        </li>
        <li className="text-lg font-medium text-gray-500 hover:text-gray-900 cursor-pointer list-none">
          <ScrollLink to="usage">導入方法</ScrollLink>
        </li>
        <li className="text-lg font-medium text-gray-500 hover:text-gray-900 cursor-pointer list-none">
          <ScrollLink to="ranking">ランキング</ScrollLink>
        </li>
        <li className="text-lg font-medium text-gray-500 hover:text-gray-900 cursor-pointer list-none">
          よくある質問
        </li>
        <li className="text-lg font-medium text-gray-500 hover:text-gray-900 cursor-pointer list-none">
          お問い合わせ
        </li>
      </ul>
    </header>
  )
}
