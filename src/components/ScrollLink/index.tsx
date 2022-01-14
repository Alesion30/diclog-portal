import { Link } from 'react-scroll'
import { classNames } from '~/functions/classNames'

export type ScrollLinkProps = {
  children: React.ReactChild
  to: string
  className?: string
}

export const ScrollLink: React.VFC<ScrollLinkProps> = ({
  children,
  to,
  className,
}) => {
  return (
    <Link
      to={to}
      smooth={true}
      duration={600}
      className={classNames(className, 'cursor-pointer')}
    >
      {children}
    </Link>
  )
}
