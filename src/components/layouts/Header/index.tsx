import Link from 'next/link'
import { useRouter } from 'next/router'
import { IconImage } from '~/components/uiParts/Image'
import { CONTACT_LINK } from '~/constants/link'
import { ScrollLink } from '../../uiParts/ScrollLink'

export const Header: React.VFC = () => {
  const router = useRouter()

  const NavLink: React.VFC<{ children: string; to: string }> = ({
    children,
    to,
  }) => {
    if (router.pathname === '/') {
      return <ScrollLink to={to}>{children}</ScrollLink>
    } else {
      return (
        <Link href={`/#${to}`}>
          <a>{children}</a>
        </Link>
      )
    }
  }

  return (
    <header className="bg-white w-full justify-between content-center rounded-full flex px-6 lg:px-14 py-5 shadow-lg">
      <Link href="/">
        <a>
          <div className="flex space-x-2 content-center">
            <IconImage width={40} />
            <h1 className="text-3xl font-bold font-lemon mt-1">Diclog</h1>
          </div>
        </a>
      </Link>
      <ul className="hidden lg:flex space-x-7 justify-center items-center">
        <li className="text-lg font-medium text-gray-500 hover:text-gray-900 cursor-pointer list-none">
          <NavLink to="about">Diclogとは</NavLink>
        </li>
        <li className="text-lg font-medium text-gray-500 hover:text-gray-900 cursor-pointer list-none">
          <NavLink to="usage">導入方法</NavLink>
        </li>
        <li className="text-lg font-medium text-gray-500 hover:text-gray-900 cursor-pointer list-none">
          <NavLink to="ranking">ランキング</NavLink>
        </li>
        <li className="text-lg font-medium text-gray-500 hover:text-gray-900 cursor-pointer list-none">
          <NavLink to="question">よくある質問</NavLink>
        </li>
        <li className="text-lg font-medium text-gray-500 hover:text-gray-900 cursor-pointer list-none">
          <a href={CONTACT_LINK} target="_blank" rel="noopener noreferrer">
            お問い合わせ
          </a>
        </li>
      </ul>
    </header>
  )
}
