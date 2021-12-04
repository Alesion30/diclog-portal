import { Link } from 'react-scroll'
import { classNames } from '~/functions/classNames'
import { HEADER_HEIGHT } from './Header'

export type ScrollProps = {
  children: React.ReactChild
  to: string
  className?: string
}

export const Scroll: React.VFC<ScrollProps> = ({ children, to, className }) => {
  return (
    <Link
      to={to}
      smooth={true}
      offset={-1 * HEADER_HEIGHT}
      duration={600}
      className={classNames(className, 'cursor-pointer')}
    >
      {children}
    </Link>
  )
}
