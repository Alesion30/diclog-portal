export type ContainerProps = {
  children: React.ReactNode
  id?: string
  className?: string
  style?: React.CSSProperties
}

export const Container: React.VFC<ContainerProps> = ({
  children,
  id,
  className,
  style,
}) => {
  return (
    <div id={id} className={className} style={style}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">{children}</div>
    </div>
  )
}
