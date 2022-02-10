import clsx from 'clsx'
import { Link } from 'react-scroll'

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
      className={clsx(className, 'cursor-pointer')}
      href="#"
    >
      {children}
    </Link>
  )
}
